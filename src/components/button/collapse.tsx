import { memo, useEffect } from 'react';
import './collapse.less';
import { twMerge } from 'tailwind-merge';

const Collapse = memo(({ active }: { active?: boolean }) => {
  useEffect(() => {}, []);
  return <div className={twMerge('Button-collapse', active ? 'Button-collapse-active' : '')} />;
});
export default Collapse;
