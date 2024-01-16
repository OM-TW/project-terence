import { memo, useEffect } from 'react';
import './header.less';
import Select from '@/components/select';

const Header = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Header'>
      <div>
        <div className='title'>
          就是相信自己
          <br />
          永遠可以更棒。
        </div>
        <div className='sub'>紅領帶都在幹嘛？看看他們怎麼說。</div>
        <div className='select'>
          <Select>
            <option>2023 第十五屆</option>
          </Select>
        </div>
      </div>
      <div>
        一身筆挺的西裝不是帥而已，那是因為尊重…尊重工作、專業、細節和正確的價值，尊重每一位獨一無二的夥伴、部屬及老闆，尊重自己，最後贏得別人的尊重。
        <br />
        一身筆挺的西裝不是帥而已，那是因為尊重…尊重工作、專業、細節和正確的價值，尊重每一位獨一無二的夥伴、部屬及老闆，尊重自己，最後贏得別人的尊重。
      </div>
    </div>
  );
});
export default Header;
