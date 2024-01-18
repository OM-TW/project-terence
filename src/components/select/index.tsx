import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './index.less';

type T = IReactProps & {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: number | string;
};

const Select = memo(({ children, onChange, defaultValue }: T) => (
  <select className='Select' onChange={onChange} defaultValue={defaultValue}>
    {children}
  </select>
));
export default Select;
