import { memo } from 'react';
import './aside.less';

const Aside = memo(() => (
  <aside className='Aside'>
    <div>
      <div className='title'>
        <div className='grid' />
        <div className='relative'>
          我們相信，
          <br />
          熱情是一切的根源。
        </div>
      </div>
      <div className='tie' />
    </div>
    <div>
      <p>
        透過【Project Team Terence
        林宗緯紅領帶計畫】，我們希望給予年輕學子更多關於行銷傳播的知識，更重要的是，激發他們對奧美的熱情。
        不同於一般獎學金，我們相信，對學生有幫助的，除了給予一筆金錢之外，更重要的是透過實際的貼身觀察，教導他們正確的行銷傳播產業價值觀給予他們行銷傳播工作的體驗，幫助他們做最好的判斷。最終，透過這項計畫，我們希望能替台灣及中國的行銷傳播產業，培育更多熱情、專業、執著、正直、才華洋溢的年輕林宗緯，讓這個行業，充滿更多的宋秩銘及莊淑芬。
      </p>
    </div>
  </aside>
));
export default Aside;
