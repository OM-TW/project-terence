import { memo } from 'react';
import './terence.less';

type T = {
  title: string;
  subTitle: string;
};

const Terence = memo(({ title, subTitle }: T) => (
  <div className='Button-terence'>
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </div>
));
export default Terence;
