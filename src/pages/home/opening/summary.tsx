import { memo, useEffect } from 'react';
import './summary.less';

const Summary = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Summary'>
      <div>
        招募職位
        <span>Opening</span>
      </div>
    </div>
  );
});
export default Summary;
