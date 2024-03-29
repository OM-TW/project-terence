import LoadingProcess from '@/components/loadingProcess';
import Navigation from '@/components/navigation';
import News from '@/components/news';
import OgilvyLogo from '@/components/ogilvyLogo';
import { PAGE } from '@/settings/config';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import Gtag from 'lesca-gtag';
import Landscape from 'lesca-react-landscape';
import { GlobalScrollbar } from 'mac-scrollbar';
import 'mac-scrollbar/dist/mac-scrollbar.css';
import { Suspense, lazy, memo, useContext, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

Fetcher.install({
  hostUrl: import.meta.env.VITE_API_PATH || './api',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

Gtag.install(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

if (import.meta.env.VITE_MOCKING === 'true') {
  import('@/mocks/browser').then((e) => {
    e.worker.start({ serviceWorker: { url: './mockServiceWorker.js' } });
  });
}

const Pages = memo(() => {
  const [context] = useContext(Context);
  const page = context[ActionType.Page];

  const Page = useMemo(() => {
    const [target] = Object.values(PAGE).filter((data) => data === page);
    if (target) {
      const Element = lazy(() => import(`./${target}/index.tsx`));
      return (
        <Suspense fallback=''>
          <Element />
        </Suspense>
      );
    }
    return '';
  }, [page]);

  return Page;
});

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);
  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        <Pages />
        <Navigation />
        <OgilvyLogo />
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
        {state[ActionType.Scrollbar]?.enabled && <GlobalScrollbar />}
        {state[ActionType.Ready]?.enabled && state[ActionType.News]?.enabled && <News />}
      </Context.Provider>
      <Landscape style={{ backgroundColor: '#EB3F43' }} />
    </div>
  );
};

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
