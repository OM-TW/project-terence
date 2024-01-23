import { memo } from 'react';
import { AboutQuotesList } from '../config';
import './index.less';

type T = { data: (typeof AboutQuotesList)[number] };

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
        {AboutQuotesList.map((data) => {
          return <Row key={JSON.stringify(data)} data={data} />;
        })}
      </div>
    </div>
  </div>
));
export default Quotes;
