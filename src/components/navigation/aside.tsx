import { memo, useEffect } from 'react';
import './aside.less';

const Aside = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Aside'>
      <div className='grid'>
        <div />
      </div>
      <div className='contact'>
        <div>
          <button className='fb'></button>
          <button className='ig'></button>
        </div>
        <div>
          <span>Contact us</span>
          <br />
          <a target='_blank' href='#'>
            Robert Kung
          </a>
          <br />
          <a target='_blank' href='#'>
            Amy Chen
          </a>
          <br />
          <a target='_blank' href='#'>
            +886 2 77451688
          </a>
        </div>
        <div>
          <span>Ogilvy Taiwan</span>
          <br />
          <a target='_blank' href='#'>
            3F 89 Song Ren Rd
            <br />
            Taipei 110, Taiwan
          </a>
        </div>
      </div>
    </div>
  );
});
export default Aside;
