import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { ShareContext } from './config';

const ScrollBar = forwardRef((_, ref) => {
  const DraggableRef = useRef<Draggable>(null);

  const [, setState] = useContext(ShareContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [right, setRight] = useState<number>(0);

  const clientWidthRef = useRef(window.innerHeight);

  useEffect(() => {
    const resize = () => {
      if (scrollRef.current) setRight(scrollRef.current?.getBoundingClientRect().width - 20 || 0);
      if (clientWidthRef.current !== window.innerWidth) {
        setState((S) => ({ ...S, percent: 0 }));
        clientWidthRef.current = window.innerWidth;
      }
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
    <div className='scroll'>
      <div ref={scrollRef} className='bar'>
        {scrollRef.current && (
          <Draggable ref={DraggableRef} onDrag={eventLogger} axis='x' bounds={{ left: 0, right }}>
            <div className='btn' />
          </Draggable>
        )}
      </div>
    </div>
  );
});
export default ScrollBar;
