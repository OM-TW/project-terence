import { memo } from 'react';
import { TerenceSevenList } from '../config';
import './index.less';

type T = {
  data: (typeof TerenceSevenList)[0];
};

const Row = memo(({ data }: T) => {
  return (
    <div className='row'>
      <div>{data.english}</div>
      <div />
      <div>{data.chinese}</div>
      <div>{data.description}</div>
    </div>
  );
});

const Seven = memo(() => (
  <div className='Seven'>
    <div className='ctx'>
      <div>
        {TerenceSevenList.map((data) => (
          <Row key={JSON.stringify(data)} data={data} />
        ))}
      </div>
    </div>
  </div>
));
export default Seven;
