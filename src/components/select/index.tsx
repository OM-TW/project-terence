import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './index.less';

const Select = memo(({ children }: IReactProps) => <select className='Select'>{children}</select>);
export default Select;
