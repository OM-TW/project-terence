import { memo, useContext, useMemo } from 'react';
import './aside.less';
import { OpenAsideList, OpeningContext } from './config';

const Aside = memo(() => {
  const [state] = useContext(OpeningContext);
  const data = useMemo(() => OpenAsideList[state.index], [state.index]);
  return (
    <aside className='Aside'>
      <div className='square'></div>
      <div className='descriptions'>
        <h1>{data.title}</h1>
        <p>
          {data.body.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </p>
      </div>
    </aside>
  );
});
export default Aside;
