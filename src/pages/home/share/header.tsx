import Select from '@/components/select';
import { chinese } from '@/settings/chineseNumerals';
import { memo, useContext } from 'react';
import './header.less';
import { ShareContext } from './config';
import { DefaultInternshipExperience } from './temp';

const Header = memo(() => {
  const [state, setState] = useContext(ShareContext);
  const fullYear = new Date().getFullYear();
  const th = fullYear - 2008;

  // const { title, data } = useMemo(() => {
  //   const currentData = Object.entries(DefaultInternshipExperience).filter(
  //     (_, index) => index === th - 1,
  //   )[0];
  //   const title = currentData[0];
  //   const data = currentData[1][index];

  //   return { title, data };
  // }, [th]);

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
            {[...new Array(th).keys()].map((index) => {
              const currentData = Object.entries(DefaultInternshipExperience).filter(
                (_, i) => i === index - 1,
              )[0];
              if (!currentData) return null;
              return (
                <option key={`option-${index}`} value={th - index}>
                  {fullYear - index} 第{chinese.toChinese(th - index)}屆
                </option>
              );
            })}
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
