import { memo, useEffect, useState } from 'react';
import Aside from './aside';
import './index.less';
import List from './list';
import { OpeningContext, OpeningState } from './config';
import Summary from './summary';
import Article from './article';

const Opening = memo(() => {
  const value = useState(OpeningState);
  useEffect(() => {}, []);
  return (
    <section id='opening' className='Opening'>
      <OpeningContext.Provider value={value}>
        <Aside />
        <Summary />
        <Article />
        <List />
      </OpeningContext.Provider>
    </section>
  );
});
export default Opening;
