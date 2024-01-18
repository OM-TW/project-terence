import Button from '@/components/button';
import { ScrollbarElement } from '@/settings/type';
import { WheelEvent, memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './carousel.less';
import { ShareContext, ShareList } from './config';
import ScrollBar from './scrollbar';

type T = { data: (typeof ShareList)[0]; index: number };

const Slide = memo(({ data, index }: T) => {
  const [, setState] = useContext(ShareContext);
  return (
    <div className='slide'>
      <div className='title'>
        <h2>{data.name}</h2>
        <div />
        <span>{data.engName}</span>
      </div>
      <div className='content'>{data.content}</div>
      <div className='w-full flex justify-end'>
        <Button onClick={() => setState((S) => ({ ...S, index, trigger: true }))}>
          <Button.More size='small'>More</Button.More>
        </Button>
      </div>
    </div>
  );
});

const Carousel = memo(() => {
  const [state] = useContext(ShareContext);
  const { percent } = state;

  const slickRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<ScrollbarElement>(null);
  const totalWidth = ShareList.length * 272;
  const [offset, getOffset] = useState<number>(0);
  const touchProperty = useRef({ x: 0, enabled: false });

  useEffect(() => {
    const resize = () => {
      if (slickRef.current) {
        const { width } = slickRef.current.getBoundingClientRect();
        getOffset(totalWidth - width);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const x = useMemo(() => {
    if (offset === 0) return 0;
    const currentOffset = offset + 96;
    if (percent >= 1) return 0 - currentOffset;
    return 0 - currentOffset * percent;
  }, [percent, offset]);

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) scrollRef.current.set(e.deltaX);
  };

  return (
    <div className='Carousel'>
      <div ref={slickRef} className='w-full overflow-x-hidden pl-12 pr-5 py-10'>
        <div
          style={{ width: `${totalWidth}px`, transform: `translateX(${x}px)` }}
          className='flex flex-nowrap space-x-5 duration-100'
          onWheel={onWheel}
          onTouchStart={(e) => {
            touchProperty.current.enabled = true;
            touchProperty.current.x = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            const currentX = e.touches[0].clientX;
            const delta = Math.floor(touchProperty.current.x - currentX);
            scrollRef.current?.set(delta);
            touchProperty.current.x = currentX;
          }}
          onTouchEnd={() => {
            touchProperty.current.enabled = false;
          }}
        >
          {ShareList.map((data, index) => {
            return <Slide key={JSON.stringify(data)} data={data} index={index} />;
          })}
        </div>
      </div>
      <ScrollBar ref={scrollRef} />
    </div>
  );
});
export default Carousel;
