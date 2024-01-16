import { memo } from 'react';
import './aside.less';

const Aside = memo(() => (
  <aside className='Aside'>
    <div className='square'></div>
    <div className='descriptions'>
      <h1>「你以為的業務，很不一樣。」</h1>
      <p>
        代理商的業務不僅止於溝通橋樑，是品牌一條龍服務的關鍵領頭羊、
        <br />
        是整合一切瑣碎與創意專案管理製作人、更是行銷最前線的顧問。
        <br />
        任何科系都能在此起步、找到最適合你的戰鬥位置，行得瀟灑、有你的專屬風格，才夠真本事。
      </p>
    </div>
  </aside>
));
export default Aside;
