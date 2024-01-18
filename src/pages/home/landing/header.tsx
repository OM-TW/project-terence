import { memo } from 'react';
import './header.less';

const Header = memo(() => {
  const fullYear = new Date().getFullYear();
  const th = fullYear - 2008;
  return (
    <header className='Header'>
      <div>
        <div>{th}</div>
        <div>{fullYear}</div>
        <div>
          奧美紅領帶計畫
          <span>Project T</span>
        </div>
      </div>
    </header>
  );
});
export default Header;
