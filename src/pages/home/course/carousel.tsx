import { Dispatch, SetStateAction, memo, useContext } from 'react';
import './carousel.less';
import { CourseContext, CourseMonsters, TCourseState } from './config';
import Button from '@/components/button';

const CardWidth = 300;
type T = {
  data: (typeof CourseMonsters)[0];
  index: number;
  setState: Dispatch<SetStateAction<TCourseState>>;
};

const Card = memo(({ data, index, setState }: T) => {
  return (
    <Button
      className='card'
      style={{ width: `${CardWidth}px` }}
      onClick={() => setState((S) => ({ ...S, index, trigger: true }))}
    >
      <div className={`img monster-${index}`} />
      <div className='p-2 w-full text-left'>
        <h1>{data.className}</h1>
        <p>
          {data.name} <br />
          {data.position}
        </p>
      </div>
    </Button>
  );
});

const Carousel = memo(() => {
  const [, setState] = useContext(CourseContext);
  const width = CourseMonsters.length * CardWidth;
  return (
    <div className='Carousel'>
      <div>
        <div className='wrapper'>
          <div style={{ width: `${width}px` }}>
            {CourseMonsters.map((item, index) => (
              <Card key={JSON.stringify(item)} data={item} index={index} setState={setState} />
            ))}
          </div>
        </div>
        <div className='more'>
          <div>
            <Button onClick={() => setState((S) => ({ ...S, trigger: true }))}>
              <Button.More>More</Button.More>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Carousel;
