import { LINKS } from '@/settings/config';
import { memo, useState } from 'react';
import Button from '../button';
import Drawer from './drawer';
import './index.less';

const Navigation = memo(() => {
  const [status, setStatus] = useState(false);
  return (
    <nav className='Navigation'>
      <div className='menu'>
        <ul>
          {Object.keys(LINKS).map((e) => {
            type T = keyof typeof LINKS;
            return (
              <li key={e}>
                <button
                  className={e}
                  onClick={() => {
                    window.open(LINKS[e as T] || '#', '_blank');
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className='shortcut'>
        <button>News</button>
      </div>
      <Drawer status={status} setStatus={setStatus} />
      <Button
        className='relative w-24 h-24'
        onClick={() => {
          setStatus((S) => !S);
        }}
      >
        <Button.Drawer status={status} />
      </Button>
    </nav>
  );
});
export default Navigation;
