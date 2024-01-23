import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { memo, useContext, useMemo } from 'react';
import { TerenceContext } from './config';
import './detail.less';
import Foreword from './foreword';
import Quotes from './quotes';
import Seven from './seven';
import Terence from './terence';

const Detail = memo(() => {
  const [state, setState] = useContext(TerenceContext);
  const { index } = state;

  const Page = useMemo(() => {
    return [<Terence />, <Foreword />, <Seven />, <Quotes />][index];
  }, [index]);

  return (
    <Dialog
      closeButton={
        <Button onClick={() => setState((S) => ({ ...S, trigger: false }))}>
          <Button.Close />
        </Button>
      }
    >
      <div className='Detail'>{Page}</div>
    </Dialog>
  );
});
export default Detail;
