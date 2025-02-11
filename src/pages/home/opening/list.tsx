import { memo, useContext } from 'react';
import { OpeningContext } from './config';
import './list.less';

const List = memo(() => {
  const [state, setState] = useContext(OpeningContext);
  return (
    <div className='List'>
      <div>
        <ol>
          {['業務', '策略', '創意', '公關', '數位體驗'].map((name, i) => {
            if (name === '公關') return null;
            return (
              <li key={name} className={state.index === i ? 'active' : ''}>
                <button
                  onClick={() => {
                    setState((S) => ({ ...S, index: i }));
                  }}
                >{`${name}紅領帶`}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
});
export default List;
