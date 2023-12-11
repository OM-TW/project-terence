import OnloadProvider from 'lesca-react-onload';
import { Suspense, lazy, memo, useMemo, useState } from 'react';
import { HomeContext, HomePages, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Landing from './landing';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);
  const { step } = state;

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

  return (
    <OnloadProvider onload={() => setState((S) => ({ ...S, step: HomeStepType.loaded }))}>
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
