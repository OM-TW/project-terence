import Button from '@/components/button';
import { memo, useState } from 'react';
import { TerenceContext, TerenceMenu, TerenceState } from './config';
import Detail from './detail';
import './index.less';

const Terence = memo(() => {
  const value = useState(TerenceState);
  const [state, setState] = value;

  return (
    <TerenceContext.Provider value={value}>
      <section className='Terence'>
        <div>
          <div>
            <div className='symbols' />
          </div>
          <div>
            {TerenceMenu.map((data, index) => (
              <Button
                key={JSON.stringify(data)}
                className='w-full max-w-lg'
                onClick={() => setState((S) => ({ ...S, trigger: true, index }))}
              >
                <Button.Terence title={data.title} subTitle={data.subTitle} />
              </Button>
            ))}
          </div>
        </div>
        {state.trigger && <Detail />}
      </section>
    </TerenceContext.Provider>
  );
});
export default Terence;
