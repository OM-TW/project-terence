import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { memo, useContext, useEffect, useMemo } from 'react';
import { TerenceContext } from './config';
import './detail.less';
import Terence from './terence';
import Foreword from './foreword';
import Seven from './seven';
import Quotes from './quotes';

const Detail = memo(() => {
  const [state, setState] = useContext(TerenceContext);
  const { index } = state;

  useEffect(() => {}, []);
  const Page = useMemo(() => {
    return [<Terence />, <Foreword />, <Seven />, <Quotes />][index];
  }, [index]);

  return (
    <Dialog>
      <div className='Detail'>
        {Page}
        <div className='close'>
          <Button onClick={() => setState((S) => ({ ...S, trigger: false }))}>
            <Button.Close />
          </Button>
        </div>
      </div>
    </Dialog>
  );
});
export default Detail;
