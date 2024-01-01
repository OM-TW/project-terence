import { memo, useEffect } from 'react';
import './index.less';
import { IReactProps } from '@/settings/type';

const Select = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return <select className='Select'>{children}</select>;
});
export default Select;
