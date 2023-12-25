import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import './regular.less';

const Regular = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return <div className='Button-regular'>{children}</div>;
});
export default Regular;
