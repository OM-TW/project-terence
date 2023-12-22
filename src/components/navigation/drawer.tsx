import { MENU } from '@/settings/config';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './drawer.less';

const Drawer = memo(({ status }: { status: boolean }) => (
  <div className={twMerge('Drawer', status ? 'w-screen' : 'w-0')}>
    <div className='ctx'>
      <div>
        <ol>
          {MENU.map((data) => (
            <li key={JSON.stringify(data)}>
              <div>
                <h1>{data.cht}</h1>
                <span>{data.eng}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div></div>
    </div>
  </div>
));
export default Drawer;
