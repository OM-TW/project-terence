import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './regular.less';

const Regular = memo(({ children }: IReactProps) => (
  <div className='Button-regular'>{children}</div>
));
export default Regular;
