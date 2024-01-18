import { memo } from 'react';
import './aside.less';
import { LINKS } from '@/settings/config';

const Aside = memo(() => (
  <div className='Aside'>
    <div className='grid'>
      <div />
    </div>
    <div className='contact'>
      <div>
        <button
          onClick={() => {
            window.open(LINKS.facebook, '_blank');
          }}
          className='fb'
        ></button>
        <button
          className='ig'
          onClick={() => {
            window.open(LINKS.instagram, '_blank');
          }}
        ></button>
      </div>
      <div>
        <span>Contact us</span>
        <br />
        <a target='_blank' href='mailto:robertcl.kung@ogilvy.com'>
          Robert Kung
        </a>
        <br />
        <a target='_blank' href='mailto:amity.chen@Ogilvy.com'>
          Amy Chen
        </a>
        <br />
        <a target='_blank' href='tel:0277451688'>
          +886 2 77451688
        </a>
      </div>
      <div>
        <span>Ogilvy Taiwan</span>
        <br />
        <a target='_blank' href='https://maps.app.goo.gl/4qyPLyeNVAjjRxox8'>
          3F 89 Song Ren Rd
          <br />
          Taipei 110, Taiwan
        </a>
      </div>
    </div>
  </div>
));
export default Aside;
