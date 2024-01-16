import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './more.less';

type T = IReactProps & {
  size?: 'small' | 'large';
};

const More = memo(({ children, size = 'large' }: T) => (
  <div
    className={twMerge('Button-More', size === 'large' ? 'Button-More-large' : 'Button-More-small')}
  >
    <span>{children}</span>
  </div>
));
export default More;
