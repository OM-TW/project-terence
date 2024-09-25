import { memo, useContext, useEffect, useState } from 'react';
import Carousel from './carousel';
import { ShareContext, ShareState } from './config';
import Detail from './detail';
import Header from './header';
import './index.less';
import { HomeContext, THomeShare } from '../config';

const Experience = memo(() => {
  const value = useState(ShareState);
  const [, setState] = value;

  const homeState = useContext(HomeContext);
  const { share } = homeState[0];

  useEffect(() => {
    if (share.length > 0) {
      const data = share.reduce(
        (prev, next) => {
          if (prev[next.session]) prev[next.session].push(next);
          else prev[next.session] = [next];
          return prev;
        },
        {} as { [k: string]: THomeShare[] },
      );

      setState((S) => ({ ...S, th: Object.keys(data).length, data }));
    }
  }, [share]);

  return (
    <ShareContext.Provider value={value}>
      <section id='share' className='Share'>
        <Header />
        <Carousel />
        {value[0].trigger && <Detail />}
      </section>
    </ShareContext.Provider>
  );
});
export default Experience;
