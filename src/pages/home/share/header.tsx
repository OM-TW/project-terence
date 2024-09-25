import Select from '@/components/select';
import { chinese } from '@/settings/chineseNumerals';
import { memo, useContext } from 'react';
import { ShareContext } from './config';
import './header.less';

const Header = memo(() => {
  const [state, setState] = useContext(ShareContext);
  const { data } = state;
  const fullYear = new Date().getFullYear();

  return (
    <div className='Header'>
      <div>
        <div className='title'>而紅領帶相信……</div>
        {/* <div className='sub'>紅領帶都在幹嘛？看看他們怎麼說。</div> */}
        <div className='select'>
          <Select
            onChange={(e) => {
              setState((S) => ({ ...S, th: Number(e.target.value) }));
            }}
            defaultValue={state.th}
          >
            {Object.keys(data).map((key) => (
              <option key={`option-${key}`} value={Object.keys(data).length - parseInt(key) + 1}>
                {fullYear - parseInt(key)} 第
                {chinese.toChinese(Object.keys(data).length - parseInt(key) + 1)}屆
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        每一屆的紅領帶，都在這裡封存了他們的身為紅領帶的心情與學習。探探學長姐的腦袋，看看他們在紅領帶的兩個月後得到什麼、失去什麼、擁有什麼又拋下了什麼。
      </div>
    </div>
  );
});
export default Header;
