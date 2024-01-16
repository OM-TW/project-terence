import { memo, useEffect } from 'react';
import Head from './head';
import './index.less';
import Body from './body';
import Footer from './footer';

const Terence = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Terence'>
      <Head />
      <Body />
      <Footer />
    </div>
  );
});
export default Terence;
