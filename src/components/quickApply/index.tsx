import { memo, useEffect } from 'react';
import './index.less';
import Button from '../button';

const QuickApply = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='QuickApply'>
      <div>
        <Button>
          <Button.Apply />
        </Button>
      </div>
    </div>
  );
});
export default QuickApply;
