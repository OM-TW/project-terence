import useInit from '@/hooks/useInit';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import { Suspense, lazy, memo, useContext, useEffect, useMemo, useState } from 'react';
import { HomeContext, HomePages, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Landing from './landing';

const hash = window.location.hash;

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);
  const { step } = state;
  const [data, getData] = useInit();

  const pages = useMemo(() => {
    if (step !== HomeStepType.unset) {
      return HomePages.filter((_, index) => index !== 0).map((data) => {
        const Element = lazy(() => import(`./${data.page}/index.tsx`));
        return (
          <Suspense fallback='' key={JSON.stringify(data)}>
            <Element />
          </Suspense>
        );
      });
    } else return null;
  }, [step]);

  useEffect(() => {
    if (step === HomeStepType.fontLoaded) {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = hash;
      }, 400);
      getData();
    } else window.location.hash = '';
  }, [step]);

  useEffect(() => {
    if (data) {
      const [schedule] = data.schedule.data;
      const [news] = data.news.data;
      const share = data.share.data;
      setContext({ type: ActionType.Ready, state: { enabled: true, contacts: schedule.contacts } });
      setContext({ type: ActionType.News, state: { enabled: true, html: news.html } });
      setState((S) => ({ ...S, schedule, news, share }));
    }
  }, [data]);

  return (
    <OnloadProvider
      onload={() => {
        setState((S) => ({ ...S, step: HomeStepType.loaded }));
        setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
        document.fonts.ready.then(() => {
          setState((S) => ({ ...S, step: HomeStepType.fontLoaded }));
        });
      }}
    >
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>
          <Landing />
          {(step !== HomeStepType.unset && pages) || null}
        </HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
