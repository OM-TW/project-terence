import { memo } from 'react';
import './grid.less';

const Grid = memo(() => (
  <div className='Grid'>
    <div className='leftCorner'>
      <div className='cistern'>
        {[...new Array(4 * 4).keys()].map((e) => (
          <div key={`l${e}`}>
            <div />
            <div />
          </div>
        ))}
      </div>
    </div>
    <div className='rightCorner'>
      <div className='cistern'>
        {[...new Array(4 * 4).keys()].map((e) => (
          <div key={`l${e}`}>
            <div />
            <div />
          </div>
        ))}
      </div>
    </div>
  </div>
));
export default Grid;
