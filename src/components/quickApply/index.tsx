import { memo, useEffect } from 'react';
import './index.less';
import Button from '../button';
import { GOOGLE_FORM_URL } from '@/settings/config';

const QuickApply = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='QuickApply'>
      <div>
        <Button
          onClick={() => {
            window.open(GOOGLE_FORM_URL, '_blank');
          }}
        >
          <Button.Apply />
        </Button>
      </div>
    </div>
  );
});
export default QuickApply;
