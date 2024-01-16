import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './course.less';

type T = IReactProps & {
  active?: boolean;
};

const Course = memo(({ children, active }: T) => (
  <div className={twMerge('Button-course', active ? 'Button-course-on' : '')}>
    <div className='relative'>{children}</div>
  </div>
));
export default Course;
