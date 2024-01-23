import { Context } from '@/settings/constant';
import { ActionType, IReactProps, TransitionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import useTween from 'lesca-use-tween';
import { ReactNode, memo, useContext, useEffect, useState } from 'react';
import './index.less';
import Click from 'lesca-click';

type T = IReactProps & { closeButton?: ReactNode };
type TBox = T & { status: TransitionType };

Click.addPreventExcept('.Dialog');

const Box = ({ children, status, closeButton = null }: TBox) => {
  const [style, setStyle] = useTween({ y: window.innerHeight });
  useEffect(() => {
    if (status === TransitionType.DidFadeIn) setStyle({ y: 0 }, 300);
  }, [status]);
  return (
    <div className='Dialog'>
      <div style={style} className='w-full h-full'>
        {children}
      </div>
      <div className='fixed top-0 right-0'>{closeButton}</div>
    </div>
  );
};

const Dialog = memo(({ children, closeButton }: T) => {
  const [status, getStatus] = useState(TransitionType.Unset);
  const [, setContext] = useContext(Context);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setContext({ type: ActionType.Scrollbar, state: { enabled: false } });
    return () => {
      document.body.style.overflow = 'auto';
      setContext({ type: ActionType.Scrollbar, state: { enabled: true } });
    };
  }, []);

  useEffect(() => {
    if (status === TransitionType.Unset) {
      setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    } else {
      setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
    }
  }, [status]);

  return (
    <OnloadProvider onload={() => getStatus(TransitionType.DidFadeIn)}>
      <div>
        <Box status={status} closeButton={closeButton}>
          {children}
        </Box>
      </div>
    </OnloadProvider>
  );
});
export default Dialog;
