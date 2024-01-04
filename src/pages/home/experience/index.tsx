import { memo, useEffect, useState } from 'react';
import Carousel from './carousel';
import Header from './header';
import './index.less';
import { ExperienceContext, ExperienceState } from './config';
import Detail from './detail';

const Experience = memo(() => {
  const value = useState(ExperienceState);
  useEffect(() => {}, []);
  return (
    <ExperienceContext.Provider value={value}>
      <section className='Experience'>
        <Header />
        <Carousel />
        {value[0].trigger && <Detail />}
      </section>
    </ExperienceContext.Provider>
  );
});
export default Experience;
