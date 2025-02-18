import { ActionType } from '@/settings/type';
import Fetcher from 'lesca-fetcher';
import { useContext, useState } from 'react';
import { REST_PATH } from '../settings/config';
import { Context } from '../settings/constant';
import { THomeNews, THomeSchedule, THomeShare } from '@/pages/home/config';

export type TResult =
  | {
      schedule: { res: boolean; msg: string; data: THomeSchedule[] };
      news: { res: boolean; msg: string; data: THomeNews[] };
      share: { res: boolean; msg: string; data: THomeShare[] };
    }
  | undefined;

const useInit = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResult>();

  const fetch = async () => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    const respond = (await Fetcher.get(REST_PATH.init)) as TResult;

    setState(respond);
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
  };

  return [state, fetch] as const;
};
export default useInit;
