import { memo, useEffect } from 'react';
import './index.less';
import { TerenceQuotesList } from '../config';

type T = { data: (typeof TerenceQuotesList)[number] };

const Row = memo(({ data }: T) => {
  return (
    <div className='row'>
      <h1>{data?.title}</h1>
      <ol>{data?.list?.map((item) => <li key={item}>{item}</li>)}</ol>
    </div>
  );
});

const Quotes = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Quotes'>
      <div className='ctx'>
        <div>
          {TerenceQuotesList.map((data) => {
            return <Row key={JSON.stringify(data)} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
});
export default Quotes;
