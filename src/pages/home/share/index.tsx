import { memo, useState } from 'react';
import Carousel from './carousel';
import { ShareContext, ShareState } from './config';
import Detail from './detail';
import Header from './header';
import './index.less';

const Experience = memo(() => {
  const value = useState(ShareState);

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
