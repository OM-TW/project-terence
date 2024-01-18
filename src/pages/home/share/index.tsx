import { memo, useState } from 'react';
import Carousel from './carousel';
import { ShareContext, ShareState } from './config';
import Detail from './detail';
import Header from './header';
import './index.less';

const Experience = memo(() => {
  const value = useState({ ...ShareState, th: new Date().getFullYear() - 2008 });

  return (
    <ShareContext.Provider value={value}>
      <section id='share' className='Share'>
        <Header
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Carousel />
        {value[0].trigger && <Detail />}
      </section>
    </ShareContext.Provider>
  );
});
export default Experience;
