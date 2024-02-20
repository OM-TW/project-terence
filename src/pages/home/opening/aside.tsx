import { memo, useContext, useEffect, useMemo, useState } from 'react';
import './aside.less';
import { OpenAsideList, OpeningContext } from './config';

const Aside = memo(() => {
  const [state] = useContext(OpeningContext);
  const data = useMemo(() => OpenAsideList[state.index], [state.index]);
  const [device, setDevice] = useState<'mobile' | 'desktop'>(
    window.innerWidth < 1024 ? 'mobile' : 'desktop',
  );

  useEffect(() => {
    const resize = () => {
      setDevice(window.innerWidth < 1024 ? 'mobile' : 'desktop');
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const currentBody = useMemo(() => {
    if (device === 'mobile') return data.body.map((text) => text.split('Ｏ').join(''));
    return data.body.map((text) => text.split('Ｏ')).flat();
  }, [data.body, device]);

  return (
    <aside className='Aside'>
      <div className='square'></div>
      <div className='descriptions'>
        <h1>{data.title}</h1>
        <p>
          {currentBody.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </p>
      </div>
    </aside>
  );
});
export default Aside;
