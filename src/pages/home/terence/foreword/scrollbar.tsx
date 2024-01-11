import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { ForewordContext } from './config';
import './scrollbar.less';

const ScrollBar = forwardRef((_, ref) => {
  const [, setState] = useContext(ForewordContext);
  const DraggableRef = useRef<Draggable>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [right, setRight] = useState<number>(0);

  useEffect(() => {
    const resize = () => {
      if (barRef.current) setRight(barRef.current?.getBoundingClientRect().width - 20 || 0);
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

  useImperativeHandle(ref, () => ({
    set(v: number) {
      if (DraggableRef.current && DraggableRef.current.props.bounds) {
        if (typeof DraggableRef.current?.props.bounds === 'object') {
          const { right: r } = DraggableRef.current.props.bounds;
          if (r) {
            DraggableRef.current?.setState((S: Record<string, any>) => {
              let currentX = S.x + v;
              if (currentX < 0) currentX = 0;
              if (currentX > r) currentX = r;

              const percent = currentX / right;
              setState((S) => ({ ...S, percent }));

              return { ...S, x: currentX };
            });
          }
        }
      }
    },
  }));

  return (
    <div className='ScrollBar'>
      <div ref={barRef} className='bar'>
        {barRef.current && (
          <Draggable ref={DraggableRef} onDrag={eventLogger} axis='x' bounds={{ left: 0, right }}>
            <div className='btn' />
          </Draggable>
        )}
      </div>
    </div>
  );
});
export default ScrollBar;
