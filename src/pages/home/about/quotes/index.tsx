import { memo } from 'react';
import { TerenceQuotesList } from '../config';
import './index.less';

type T = { data: (typeof TerenceQuotesList)[number] };

const Row = memo(({ data }: T) => (
  <div className='row'>
    <h1>{data?.title}</h1>
    <ol>{data?.list?.map((item) => <li key={item}>{item}</li>)}</ol>
  </div>
));

const Quotes = memo(() => (
  <div className='Quotes'>
    <div className='ctx'>
      <div>
        {TerenceQuotesList.map((data) => {
          return <Row key={JSON.stringify(data)} data={data} />;
        })}
      </div>
    </div>
  </div>
));
export default Quotes;
