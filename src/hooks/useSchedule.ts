import Fetcher from 'lesca-fetcher';
import { useContext, useEffect, useState } from 'react';
import { REST_PATH } from '../settings/config';
import { Context } from '../settings/constant';
import { ActionType } from '@/settings/type';

export type TResult = { userID: string; id: number; title: string; completed: boolean } | undefined;

const useSchedule = () => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResult>();

  const fetch = async () => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    const respond = (await Fetcher.get(REST_PATH.schedule)) as TResult;
    setState(respond);
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
  };

  useEffect(() => {
    fetch();
  }, []);

  return [state, fetch] as const;
};
export default useSchedule;
