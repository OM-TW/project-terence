import Button from '@/components/button';
import Dialog from '@/components/dialog';
import { toChineseWithUnits } from 'chinese-number-format';
import { memo, useContext, useMemo } from 'react';
import { HomeContext } from '../config';
import { ShareContext } from './config';
import './detail.less';

const Detail = memo(() => {
  const [homeState] = useContext(HomeContext);
  const [state, setState] = useContext(ShareContext);
  const { th, index } = state;
  const { share } = homeState;

  const data = useMemo(() => {
    return share.filter((data) => data.session === th)[index];
  }, [th, index, share]);

  const title = useMemo(() => {
    const year = 2009 + th - 1;
    const currentTh = toChineseWithUnits(th, 'zh-TW');
    return `${year} 第${currentTh}屆紅領帶`;
  }, [th]);

  const currentTH = useMemo(() => {
    if (th === 2) return 'nd';
    else if (th === 3) return 'rd';
    return 'th';
  }, [th]);

  return (
    <div className='Detail'>
      <Dialog
        closeButton={
          <Button onClick={() => setState((S) => ({ ...S, trigger: false }))}>
            <Button.Close />
          </Button>
        }
      >
        <div className='w-full p-20'>
          <div className='header'>
            <h2>
              {th}
              <span>{currentTH}</span>
            </h2>
            <hr />
            <div className='sub'>
              <span>{title}</span>
              <br />
              <h3>
                {data.name} {data.engName}
              </h3>
            </div>
          </div>
          <div className='body' dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </div>
      </Dialog>
    </div>
  );
});
export default Detail;
