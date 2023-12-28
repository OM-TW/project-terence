import { memo, useEffect } from 'react';
import './phase.less';
import { IReactProps } from '@/settings/type';

type Props = {
  h2: string;
  h1: string;
  ps?: string;
};

const Group = memo(({ h2, h1, ps, children }: IReactProps & Props) => {
  return (
    <div className='Group'>
      <h2>{h2}</h2>
      <h1>{h1}</h1>
      <p>{children}</p>
      <p className='text-OM-red-300'>{ps}</p>
    </div>
  );
});

const Phase = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Phase pb-20'>
      <div className='action'>
        紅領帶
        <br />
        計畫介紹
      </div>
      <div className='streak streak-after' />
      <Group h2='Phase I' h1='奧美貼身作業'>
        透過於台灣奧美的貼身培訓經驗，我們希望年輕學子對行銷傳播產業有更透徹的認識與了解，並給予正確的行業觀念。
      </Group>
      <div className='steps'>
        <div className='step'>
          <h1>貼身培訓Ready</h1>
          <p>
            經本獎助計劃審核通過者，將由獎助委員安排至台灣奧美培訓。培訓期間，將可與正式員工接受相同訓練課程。培訓期為暑假兩個月。確切日期依每年時間表作適當調整。
          </p>
        </div>
        <div className='step'>
          <h1>學長姐伴你同行</h1>
          <p>
            培訓部門及內容將由本獎助計劃委員長指定，並指派台灣奧美員工作為學長，給予培訓期間的監督與協助。
          </p>
        </div>
        <div className='step'>
          <h1>圓夢助力Ｇet</h1>
          <p>培訓結束，經本計畫委員內部審核評估後，審核通過者於結業時發給兩萬元整獎助金。</p>
        </div>
      </div>
      <div className='streak streak-after streak-before mt-5' />
      <Group h2='Phase II' h1='分享與回饋' ps='註：本委員會保留視募款狀況修正獎助計劃內容之權利'>
        受獎助者經階段一結束後，必須對本獎助委員會進行成果分享。分享形式及內容將由獎助委員會與獎助者進一步討論。成果分享後，本獎助委員將進行授証儀式；結業者將可獲頒象徵林宗緯精神的紅領帶一條。
      </Group>
    </div>
  );
});
export default Phase;
