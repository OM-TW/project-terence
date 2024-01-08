import { memo, useEffect } from 'react';
import './terence.less';

type T = {
  title: string;
  subTitle: string;
};

const Terence = memo(({ title, subTitle }: T) => {
  useEffect(() => {}, []);
  return (
    <div className='Button-terence'>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
});
export default Terence;
