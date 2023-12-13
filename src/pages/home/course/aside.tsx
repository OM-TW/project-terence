import { memo, useEffect } from 'react';
import './aside.less';

const Aside = memo(() => {
  useEffect(() => {}, []);
  return (
    <aside className='Aside'>
      <div className='squire' />
      <div className='descriptions'>
        <h1>大師獨家課</h1>
        <span>Course</span>
        <p>
          集結眾多大師的精采課程，
          <br />
          傳承奧美的經驗、經典的廣告智慧，
          <br />
          陪伴大家一起學習、一起成長！
        </p>
      </div>
    </aside>
  );
});
export default Aside;
