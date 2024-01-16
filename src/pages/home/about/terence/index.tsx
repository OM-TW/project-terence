import { memo } from 'react';
import Body from './body';
import Footer from './footer';
import Head from './head';
import './index.less';

const Terence = memo(() => (
  <div className='Terence'>
    <Head />
    <Body />
    <Footer />
  </div>
));
export default Terence;
