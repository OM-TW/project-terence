import { ActionType, IReactProps } from '@/settings/type';
import { memo, useContext, useEffect } from 'react';
import './index.less';
import { Context } from '@/settings/constant';

const Dialog = memo(({ children }: IReactProps) => {
  const [, setContext] = useContext(Context);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setContext({ type: ActionType.Scrollbar, state: { enabled: false } });
    return () => {
      document.body.style.overflow = 'auto';
      setContext({ type: ActionType.Scrollbar, state: { enabled: true } });
    };
  }, []);
  return <div className='Dialog'>{children}</div>;
});
export default Dialog;
