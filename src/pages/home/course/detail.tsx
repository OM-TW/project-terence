import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { Pad } from 'lesca-number';
import { memo, useContext } from 'react';
import { CourseContext, CourseMonsters } from './config';
import './detail.less';
import { twMerge } from 'tailwind-merge';

const Detail = memo(() => {
  const [state, setState] = useContext(CourseContext);
  const { index } = state;
  console.log(index);

  return (
    <Dialog>
      <div className='Detail'>
        <div className='pagination'>
          <div>
            <span className='current'>{Pad(index + 1, 2)}</span>
            <span className='total'>{Pad(CourseMonsters.length, 2)}</span>
          </div>
          <div className={twMerge('char', `char${index}`)} />
        </div>
        <div className='controller'>
          <Button
            onClick={() =>
              setState((S) => ({
                ...S,
                index: S.index <= 0 ? CourseMonsters.length - 1 : S.index - 1,
              }))
            }
          >
            <Button.Course>prev</Button.Course>
          </Button>
          <Button
            onClick={() =>
              setState((S) => ({
                ...S,
                index: S.index >= CourseMonsters.length - 1 ? 0 : S.index + 1,
              }))
            }
          >
            <Button.Course active>next</Button.Course>
          </Button>
        </div>
        <div className='close'>
          <Button onClick={() => setState((S) => ({ ...S, trigger: false }))}>
            <Button.Close />
          </Button>
        </div>
      </div>
    </Dialog>
  );
});
export default Detail;
