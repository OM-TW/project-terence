import { memo, useEffect } from 'react';
import './quick.less';

const Quick = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Quick'>
      <div>
        <button>
          <div>
            <div />
            <div />
          </div>
          立即申請
        </button>
      </div>
    </div>
  );
});
export default Quick;
