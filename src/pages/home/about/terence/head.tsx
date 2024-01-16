import { memo } from 'react';
import './head.less';

const Head = memo(() => (
  <div className='Head'>
    <div>廣告是什麼東西？他一點都不知道，</div>
    <div>那年他18歲，但是他卻決定，</div>
    <div>
      這輩子就是要做廣告人。
      <div>他是林宗緯</div>
    </div>
  </div>
));
export default Head;
