import { TransitionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  const [, setTransition] = useState(TransitionType.Unset);

  return (
    <OnloadProvider onload={() => setTransition(TransitionType.FadeIn)}>
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>{/** */}</HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
