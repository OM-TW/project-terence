import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import './index.less';
import { MacScrollbar } from 'mac-scrollbar';

const Dialog = memo(({ children }: IReactProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div className='Dialog'>
      <MacScrollbar>{children}</MacScrollbar>
    </div>
  );
});
export default Dialog;
