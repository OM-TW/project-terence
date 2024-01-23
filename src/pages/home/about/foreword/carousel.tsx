import { WheelEventHandler, memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AboutForewordList } from '../config';
import './carousel.less';
import { ForewordContext, SlideSize } from './config';

type T = {
  data: (typeof AboutForewordList)[0];
  width: number;
};

const Slide = memo(({ data, width }: T) => (
  <div className='slide' style={{ width: `${width}px` }}>
    <div></div>
    <div>
      <h1>{data.englishName}</h1>
      <h2>{data.name}</h2>
      <div>
        {data.position}
        <span>{data.positionEnglish}</span>
      </div>
      <p>{data.description}</p>
    </div>
  </div>
));

type D = { deltaX: number };
type K = {
  onWheel: WheelEventHandler<HTMLDivElement>;
  wheel: (e: D) => void;
};

const Carousel = memo(({ onWheel, wheel }: K) => {
  const touchProperty = useRef({ x: 0, enabled: false });

  const slickRef = useRef<HTMLDivElement>(null);
  const [state] = useContext(ForewordContext);
  const { percent } = state;

  const [offset, getOffset] = useState<number>(
    window.innerWidth > 1024 ? SlideSize.max : SlideSize.min,
  );
  const [width, setWidth] = useState(window.innerWidth > 1024 ? SlideSize.max : SlideSize.min);
  const totalWidth = AboutForewordList.length * width;

  useEffect(() => {
    const resize = () => {
      const currentWidth = window.innerWidth > 1024 ? SlideSize.max : SlideSize.min;
      setWidth(currentWidth);
      if (slickRef.current) {
        const { width: w } = slickRef.current.getBoundingClientRect();
        getOffset(AboutForewordList.length * currentWidth - w);
      }
    };
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

  return (
    <div
      className='Carousel'
      onWheel={onWheel}
      onTouchStart={(e) => {
        touchProperty.current.enabled = true;
        touchProperty.current.x = e.touches[0].clientX;
      }}
      onTouchMove={(e) => {
        const currentX = e.touches[0].clientX;
        const deltaX = Math.floor(touchProperty.current.x - currentX) * 0.5;
        if (wheel) wheel({ deltaX });
        touchProperty.current.x = currentX;
      }}
      onTouchEnd={() => {
        touchProperty.current.enabled = false;
      }}
    >
      <div ref={slickRef} className='w-full overflow-x-hidden'>
        <div
          className='whitespace-nowrap flex flex-row pl-0 lg:pl-64'
          style={{ width: `${totalWidth}px`, transform: `translateX(${x}px)` }}
        >
          {AboutForewordList.map((data) => (
            <Slide width={width} key={JSON.stringify(data)} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Carousel;
