import { IReactProps } from '@/settings/type';
import { MouseEventHandler, memo, useContext } from 'react';
import { ScheduleContext, SchedulePageType } from './config';
import './tab.less';

type P = IReactProps & { active: boolean; onClick?: MouseEventHandler };

const Button = memo(({ children, active, onClick }: P) => (
  <button className={`btn ${active ? 'on' : ''}`} onClick={onClick}>
    {children}
  </button>
));

const Tab = memo(() => {
  const [state, setState] = useContext(ScheduleContext);
  return (
    <div className='Tab'>
      <div className='group'>
        <Button
          active={state.page === SchedulePageType.Process}
          onClick={() => setState((S) => ({ ...S, page: SchedulePageType.Process }))}
        >
          申請流程
        </Button>
        <Button
          active={state.page === SchedulePageType.Faq}
          onClick={() => setState((S) => ({ ...S, page: SchedulePageType.Faq }))}
        >
          FAQ
        </Button>
      </div>
    </div>
  );
});
export default Tab;
