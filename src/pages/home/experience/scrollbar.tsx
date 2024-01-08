import { memo, useContext, useEffect, useRef, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { ExperienceContext } from './config';

const ScrollBar = memo(() => {
  const DraggableRef = useRef<Draggable>(null);

  const [, setState] = useContext(ExperienceContext);
  const ref = useRef<HTMLDivElement>(null);
  const [right, setRight] = useState<number>(0);

  useEffect(() => {
    const resize = () => {
      if (ref.current) setRight(ref.current?.getBoundingClientRect().width - 20 || 0);
      setState((S) => ({ ...S, percent: 0 }));
      if (DraggableRef.current) {
        DraggableRef.current.setState((S) => ({ ...S, x: 0 }));
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const eventLogger: DraggableEventHandler = (_, data) => {
    const percent = data.x / right;
    setState((S) => ({ ...S, percent }));
  };

  return (
    <div className='scroll'>
      <div ref={ref} className='bar'>
        {ref.current && (
          <Draggable ref={DraggableRef} onDrag={eventLogger} axis='x' bounds={{ left: 0, right }}>
            <div className='btn' />
          </Draggable>
        )}
      </div>
    </div>
  );
});
export default ScrollBar;
