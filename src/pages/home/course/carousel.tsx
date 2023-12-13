import { memo, useEffect } from 'react';
import './carousel.less';
import { CourseMonsters } from './config';

const CardWidth = 300;

const Card = memo(({ data, index }: { data: (typeof CourseMonsters)[0]; index: number }) => {
  return (
    <div className='card' style={{ width: `${CardWidth}px` }}>
      <div className={`img monster-${index}`} />
      <div className='p-2 w-full'>
        <h1>{data.className}</h1>
        <p>
          {data.name} <br />
          {data.position}
        </p>
      </div>
    </div>
  );
});

const Carousel = memo(() => {
  const width = CourseMonsters.length * CardWidth;
  useEffect(() => {}, []);
  return (
    <div className='Carousel'>
      <div>
        <div className='wrapper'>
          <div style={{ width: `${width}px` }}>
            {CourseMonsters.map((item, index) => (
              <Card key={JSON.stringify(item)} data={item} index={index} />
            ))}
          </div>
        </div>
        <div className='more'>
          <button>
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
});
export default Carousel;
