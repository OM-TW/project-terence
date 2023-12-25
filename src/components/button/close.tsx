import { memo, useEffect } from 'react';
import './close.less';

const Close = memo(() => {
  useEffect(() => {}, []);
  return <div className='Button-close' />;
});
export default Close;
