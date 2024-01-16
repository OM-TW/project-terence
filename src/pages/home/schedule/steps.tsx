import { IReactProps } from '@/settings/type';
import { Pad } from 'lesca-number';
import { memo } from 'react';
import './steps.less';

const Breadcrumbs = memo(({ children, index = 1 }: IReactProps & { index: number }) => (
  <div className='breadcrumbs'>
    <div>
      <div>{`${Pad(index, 2)}.`}</div>
      {children}
    </div>
  </div>
));

const Steps = memo(() => (
  <div className='Steps'>
    <div className='head'>
      {['報名', '筆試', '口試'].map((item, index) => (
        <div key={index}>
          <Breadcrumbs index={index + 1}>{item}</Breadcrumbs>
        </div>
      ))}
    </div>
    <div className='body'>
      <div className='w-1/3'>
        申請期間：2024/2/15至2024/3/26 <br />
        報名完成後，將會安排進行筆試與口試，錄取將由本網站公布及個別通知。
        <p>聯絡窗口：Robert Kung, Amy Chen</p>
      </div>
      <div className='w-1/3'>
        筆試時間：2024/3/29 18:00-21:00
        <br />
        本獎助委員會將於筆試時間開始時，以email寄出考題給符合培訓資格之學生。
      </div>
      <div className='w-1/3'>
        口試公佈時間：2024/4/13
        <br />
        口試時間：2024/4/22
        <br />
        本獎助委員會將於本網站公佈口試錄取名單，錄取口試者，需準備個人作品集。
      </div>
    </div>
  </div>
));
export default Steps;
