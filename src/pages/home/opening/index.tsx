import { memo, useState } from 'react';
import Article from './article';
import Aside from './aside';
import { OpeningContext, OpeningState } from './config';
import './index.less';
import List from './list';
import Summary from './summary';

const Opening = memo(() => {
  const value = useState(OpeningState);
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
