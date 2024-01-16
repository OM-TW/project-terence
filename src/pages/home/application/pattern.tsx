import { memo } from 'react';
import './pattern.less';

const Pattern = memo(() => (
  <div className='Pattern'>
    <div className='ctx'>
      <h1>如何申請</h1>
      <h5>Application</h5>
      <div className='tie'>
        <div className='key' />
      </div>
    </div>
  </div>
));
export default Pattern;
