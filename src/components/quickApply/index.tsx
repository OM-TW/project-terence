import { HomeContext } from '@/pages/home/config';
import { memo, useContext, useEffect } from 'react';
import Button from '../button';
import './index.less';

const QuickApply = memo(() => {
  useEffect(() => {}, []);
  const [state] = useContext(HomeContext);
  const { formURL } = state.schedule;

  return (
    <div className='QuickApply'>
      <div>
        {formURL && (
          <Button
            onClick={() => {
              window.open(formURL, '_blank');
            }}
          >
            <Button.Apply />
          </Button>
        )}
      </div>
    </div>
  );
});
export default QuickApply;
