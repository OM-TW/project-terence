import { memo } from 'react';
import './aside.less';

const Aside = memo(() => (
  <aside className='Aside'>
    <div>
      <div className='title'>
        <div className='grid' />
        <div className='relative'>
          我們相信，
          <br />
          熱情就是紅領帶的顏色。
        </div>
      </div>
      <div className='tie' />
    </div>
    <div>
      <p>
        大衛奧格威說過 “We sell or else.”，這樣的精神延伸到紅領帶，便成了 “We passion or
        else.”。「奧美紅領帶計畫」透過生猛職場的貼身觀察，給予學子行銷傳播產業的沈浸式體驗，了解傳播工作的整體流程，並培養自身創意品味和工作價值觀，進而協助他們對職涯、對行銷、對人生做最適合的判斷，我們不會留一手，就看你願不願意接收所有。
        <br />
        <br />
        最終，我們希望能替行銷傳播產業，培育更多熱情、專業、執著、正直、才華洋溢的年輕人才。
      </p>
    </div>
  </aside>
));
export default Aside;
