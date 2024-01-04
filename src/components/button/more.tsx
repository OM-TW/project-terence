import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import './more.less';
import { twMerge } from 'tailwind-merge';

type T = IReactProps & {
  size?: 'small' | 'large';
};

const More = memo(({ children, size = 'large' }: T) => {
  useEffect(() => {}, []);
  return (
    <div
      className={twMerge(
        'Button-More',
        size === 'large' ? 'Button-More-large' : 'Button-More-small',
      )}
    >
      <span>{children}</span>
    </div>
  );
});
export default More;
