import { memo, useEffect } from 'react';
import './index.less';

const Cookies = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Cookies'>
      <a href='https://www.ogilvy.com/tw/privacy-policy' target='_blank'>
        隱私聲明
      </a>
      <a href='https://www.ogilvy.com/tw/cookies' target='_blank'>
        Cookies
      </a>
    </section>
  );
});
export default Cookies;
