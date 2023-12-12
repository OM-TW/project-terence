import { memo, useEffect } from 'react';
import './grid.less';

const Grid = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Grid'>
      <div className='cistern'>
        {[...new Array(4 * 4).keys()].map((e) => (
          <div key={e}>
            <div />
            <div />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Grid;
