import { memo, useEffect } from 'react';
import './header.less';

const Header = memo(() => {
  useEffect(() => {}, []);
  return (
    <header className='Header'>
      <div>
        <div>16</div>
        <div>2024</div>
        <div>
          奧美紅領帶計畫
          <span>Project T</span>
        </div>
      </div>
    </header>
  );
});
export default Header;
