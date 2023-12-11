import { memo, useEffect } from 'react';
import './index.less';

const Navigation = memo(() => {
  useEffect(() => {}, []);
  return (
    <nav className='Navigation'>
      <div className='icon'>
        <div />
      </div>
      <div className='menu'>
        <ul>
          {['messenger', 'facebook', 'instagram'].map((e) => (
            <li key={e}>
              <button className={e} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});
export default Navigation;
