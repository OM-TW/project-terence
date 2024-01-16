import { memo, useState } from 'react';
import Carousel from './carousel';
import { ExperienceContext, ExperienceState } from './config';
import Detail from './detail';
import Header from './header';
import './index.less';

const Experience = memo(() => {
  const value = useState(ExperienceState);

  return (
    <ExperienceContext.Provider value={value}>
      <section id='share' className='Share'>
        <Header />
        <Carousel />
        {value[0].trigger && <Detail />}
      </section>
    </ExperienceContext.Provider>
  );
});
export default Experience;
