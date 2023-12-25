import { memo, useEffect } from 'react';
import './course.less';
import { IReactProps } from '@/settings/type';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  active?: boolean;
};

const Course = memo(({ children, active }: T) => {
  useEffect(() => {}, []);
  return (
    <div className={twMerge('Button-course', active ? 'Button-course-on' : '')}>{children}</div>
  );
});
export default Course;
