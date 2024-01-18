import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { memo, useContext, useMemo } from 'react';
import { ShareContext } from './config';
import './detail.less';
import { DefaultInternshipExperience } from './temp';

const Detail = memo(() => {
  const [state, setState] = useContext(ShareContext);
  const { th, index } = state;

  const { title, data } = useMemo(() => {
    const currentData = Object.entries(DefaultInternshipExperience).filter(
      (_, index) => index === th - 1,
    )[0];
    const title = currentData[0];
    const data = currentData[1][index];

    return { title, data };
  }, [th]);

  return (
    <div className='Detail'>
      <Dialog>
        <div className='w-full p-20'>
          <div className='header'>
            <h2>
              {th}
              <span>th</span>
            </h2>
            <hr />
            <div className='sub'>
              <span>{title}</span>
              <br />
              <h3>
                {data.name.cht} {data.name.eng}
              </h3>
            </div>
          </div>
          <div className='body'>{data.html()}</div>
        </div>

        <div className='close'>
          <Button onClick={() => setState((S) => ({ ...S, trigger: false }))}>
            <Button.Close />
          </Button>
        </div>
      </Dialog>
    </div>
  );
});
export default Detail;
