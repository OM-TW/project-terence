import { WheelEvent, memo, useRef, useState } from 'react';
import Carousel from './carousel';
import { ForewordContext, ForewordState } from './config';
import './index.less';
import ScrollBar from './scrollbar';
import { ScrollbarElement } from '@/settings/type';

const Foreword = memo(() => {
  const scrollRef = useRef<ScrollbarElement>(null);
  const value = useState(ForewordState);

  const onWheel = (event: WheelEvent | { deltaX: number }) => {
    if (scrollRef.current) scrollRef.current.set(event.deltaX);
  };
  return (
    <div className='Foreword'>
      <ForewordContext.Provider value={value}>
        <Carousel onWheel={onWheel} wheel={onWheel} />
        <ScrollBar ref={scrollRef} />
      </ForewordContext.Provider>
    </div>
  );
});
export default Foreword;
