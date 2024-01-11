import { memo, useEffect } from 'react';
import Head from './head';
import './index.less';
import Body from './body';
import Footer from './footer';

const About = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='About'>
      <Head />
      <Body />
      <Footer />
    </div>
  );
});
export default About;
