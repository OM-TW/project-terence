import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { memo, useContext, useEffect } from 'react';
import { TerenceContext } from './config';
import './detail.less';

const Detail = memo(() => {
  const [, setState] = useContext(TerenceContext);
  useEffect(() => {}, []);
  return (
    <Dialog>
      <div className='Detail'>
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
