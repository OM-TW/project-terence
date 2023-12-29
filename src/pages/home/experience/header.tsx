import { memo, useEffect } from 'react';
import './header.less';

const Header = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Header'>
      <div className='title'>
        就是相信自己
        <br />
        永遠可以更棒。
      </div>
      <div className='sub'>紅領帶都在幹嘛？看看他們怎麼說。</div>
      <div className='select'>
        <select>
          <option>2023 第十五屆</option>
        </select>
      </div>
    </div>
  );
});
export default Header;
