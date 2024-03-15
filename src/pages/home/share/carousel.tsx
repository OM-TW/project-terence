import Button from '@/components/button';
import { ScrollbarElement } from '@/settings/type';
import { WheelEvent, memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { HomeContext, THomeShare } from '../config';
import './carousel.less';
import { ShareContext } from './config';
import ScrollBar from './scrollbar';
import { DefaultInternshipExperience } from './temp';

const data = DefaultInternshipExperience['2009 第一屆紅領帶'];
type T = { data: THomeShare; index: number };

const Slide = memo(({ data, index }: T) => {
  const [, setState] = useContext(ShareContext);

  return (
    <div className='slide'>
      <div className='title'>
        <h2>{data.name}</h2>
        <div />
        <span>{data.engName}</span>
      </div>
      <div
        className='content'
        dangerouslySetInnerHTML={{
          __html:
            data.html
              .replace(/(<([^>]+)>)/gi, '')
              .replace(/(&nbsp;)*/g, '')
              .slice(0, 63) + '...',
        }}
      />
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
  const [homeState] = useContext(HomeContext);

  const { percent, th } = state;

  const list = useMemo<typeof data>(() => {
    return Object.values(DefaultInternshipExperience)[th - 1];
  }, [th]);

  const shareList = useMemo<THomeShare[]>(() => {
    const { share } = homeState;
    return share.filter((data) => data.session === th);
  }, [th, homeState]);

  const slickRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<ScrollbarElement>(null);
  const totalWidthRef = useRef<number>(list.length * 272);
  const touchProperty = useRef({ x: 0, enabled: false });
  const [offset, getOffset] = useState<number>(0);
  const [isScroll, setScroll] = useState<boolean>(false);

  const setOffset = () => {
    if (slickRef.current) {
      const { width } = slickRef.current.getBoundingClientRect();
      getOffset(totalWidthRef.current - width);
      setScroll(width < totalWidthRef.current);
    }
  };

  const totalWidth = useMemo(() => {
    const currentWidth = list.length * 272;
    totalWidthRef.current = currentWidth;
    setOffset();
    return currentWidth;
  }, [list]);

  useEffect(() => {
    const resize = () => setOffset();
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const x = useMemo(() => {
    if (offset <= 0) return 0;
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
            touchProperty.current.x = e.touches[0].pageX;
          }}
          onTouchMove={(e) => {
            const currentX = e.touches[0].pageX;
            const delta = Math.floor(touchProperty.current.x - currentX);

            scrollRef.current?.set(delta);
            touchProperty.current.x = currentX;
          }}
          onTouchEnd={() => {
            touchProperty.current.enabled = false;
          }}
        >
          {shareList?.map((data, index) => {
            return <Slide key={JSON.stringify(data) + index} data={data} index={index} />;
          })}
        </div>
      </div>
      {isScroll && <ScrollBar ref={scrollRef} />}
    </div>
  );
});
export default Carousel;
