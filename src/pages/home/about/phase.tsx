import { memo, useEffect } from 'react';
import './phase.less';

const Phase = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Phase'>
      <div className='action'>
        紅領帶
        <br />
        計畫介紹
      </div>
      <div className='streak' />
    </div>
  );
});
export default Phase;
