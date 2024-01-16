import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './collapse.less';

const Collapse = memo(({ active }: { active?: boolean }) => (
  <div className={twMerge('Button-collapse', active ? 'Button-collapse-active' : '')} />
));
export default Collapse;
