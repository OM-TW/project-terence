import Button from '@/components/button';
import { Dispatch, SetStateAction, memo, useMemo, useState } from 'react';
import './accordion.less';
import { ScheduleFAQ } from './config';
import { twMerge } from 'tailwind-merge';

type T = {
  data: (typeof ScheduleFAQ)[0];
  index: number;
  collapse: [false | number, Dispatch<SetStateAction<false | number>>];
};

const Collapse = memo(({ data, index, collapse }: T) => {
  const [state, setState] = collapse;

  const body = useMemo(() => {
    if (state === false || state !== index) return null;
    return <p>{data.body}</p>;
  }, [state]);

  const maxHeight = useMemo(() => {
    if (state === false || state !== index) return '130px';
    return '1000px';
  }, [state]);

  return (
    <div className={twMerge('ctx', state === index ? 'bg-secondary' : '')}>
      <div style={{ maxHeight }}>
        <div>
          <div>{`Q${index + 1}`}</div>
          <div>
            <h1>{data.title}</h1>
            {body}
          </div>
        </div>
        <div>
          <Button
            onClick={() =>
              setState((S) => {
                if (S === index) return false;
                return index;
              })
            }
          >
            <Button.Collapse active={state === index} />
          </Button>
        </div>
      </div>
    </div>
  );
});

const Accordion = memo(() => {
  const collapse = useState<false | number>(false);

  return (
    <div className='Accordion'>
      {ScheduleFAQ.map((data, index) => (
        <Collapse collapse={collapse} key={JSON.stringify(data)} data={data} index={index} />
      ))}
    </div>
  );
});
export default Accordion;
