import { memo } from 'react';
import './drawer.less';

const Drawer = memo(({ status }: { status: boolean }) => (
  <div className='Button-Drawer'>
    <div className={status ? 'on' : ''}>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
    </div>
  </div>
));
export default Drawer;
