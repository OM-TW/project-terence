import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import './carousel.less';
import Button from '@/components/button';
import { ExperienceContext, ExperienceList } from './config';
import ScrollBar from './scrollbar';

type T = { data: (typeof ExperienceList)[0]; index: number };

const Slide = memo(({ data, index }: T) => {
  const [, setState] = useContext(ExperienceContext);
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
  const [state] = useContext(ExperienceContext);
  const { percent } = state;

  const slickRef = useRef<HTMLDivElement>(null);
  const totalWidth = ExperienceList.length * 272;
  const [offset, getOffset] = useState<number>(0);

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
    return 0 - offset * percent;
  }, [percent, offset]);

  return (
    <div className='Carousel'>
      <div ref={slickRef} className='w-full overflow-x-hidden pl-12 pr-5 py-10'>
        <div
          style={{ width: `${totalWidth}px`, transform: `translateX(${x}px)` }}
          className='flex flex-nowrap space-x-5 duration-100'
        >
          {ExperienceList.map((data, index) => {
            return <Slide key={JSON.stringify(data)} data={data} index={index} />;
          })}
        </div>
      </div>
      <ScrollBar />
    </div>
  );
});
export default Carousel;
