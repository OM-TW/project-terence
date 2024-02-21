import { memo, useContext } from 'react';
import { HomeContext } from '../config';
import './details.less';

const Details = memo(() => {
  const [state] = useContext(HomeContext);
  return (
    <div className='Details'>
      <h1>獎助對象名額與資格</h1>
      <ol>
        <li>本獎助計畫鼓勵對行銷傳播有熱情、有想法及企圖心的年輕學子。</li>
        <li>凡海內外大專院校與研究所學生，不分科系，對行銷傳播產業有興趣皆可申請。</li>
        <li>
          本獎助計畫考慮到培訓時間及未來職業發展培育，開放申請對象為培訓期間為
          {state.schedule.target}。
        </li>
        <li>*非本國籍學生須自行申請在台工作許可證等在台培訓所需之相關文件。</li>
        <li>本獎助計畫每年將錄取2-5名不等，視本獎助計畫募款狀況而有所調整。</li>
      </ol>
    </div>
  );
});
export default Details;
