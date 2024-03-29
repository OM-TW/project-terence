import Button from '@/components/button';
import { memo, useState } from 'react';
import { TerenceContext, AboutMenu, TerenceState } from './config';
import Detail from './detail';
import './index.less';

const About = memo(() => {
  const value = useState(TerenceState);
  const [state, setState] = value;
  return (
    <section id='about' className='About'>
      <TerenceContext.Provider value={value}>
        <div>
          <div>
            <div className='symbols' />
          </div>
          <div>
            {AboutMenu.map((data, index) => (
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
      </TerenceContext.Provider>
    </section>
  );
});
export default About;
