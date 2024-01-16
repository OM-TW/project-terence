import { MENU } from '@/settings/config';
import { Dispatch, SetStateAction, memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Aside from './aside';
import './drawer.less';

type T = {
  data: (typeof MENU)[number];
  onClick?: () => void;
};

const Button = memo(({ data, onClick = () => {} }: T) => {
  return (
    <li>
      <button onClick={onClick}>
        <h1>{data.cht}</h1>
        <span>{data.eng}</span>
      </button>
    </li>
  );
});

const Drawer = memo(
  ({ status, setStatus }: { status: boolean; setStatus: Dispatch<SetStateAction<boolean>> }) => {
    useEffect(() => {
      if (status) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
    }, [status]);
    return (
      <div className={twMerge('Drawer', status ? 'w-screen' : 'w-0')}>
        <div className='ctx'>
          <div>
            <ol>
              {MENU.map((data) => (
                <Button
                  key={JSON.stringify(data)}
                  data={data}
                  onClick={() => {
                    setStatus(false);
                    window.location.hash = data.hash;
                  }}
                />
              ))}
            </ol>
          </div>
          <div>
            <Aside />
          </div>
        </div>
      </div>
    );
  },
);
export default Drawer;
