import { TransitionType } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import Button from '../button';

type T = {
  transition: TransitionType;
  onClose: () => void;
};

const NewsDialog = memo(({ transition, onClose }: T) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useTween({ y: window.innerHeight });

  useEffect(() => {
    if (transition === TransitionType.FadeIn) setStyle({ y: 0 }, { duration: 500, delay: 200 });
  }, [transition]);

  return (
    <div className='dialog' style={style}>
      <div ref={ref} className='content'>
        <h1>第十五屆 奧美林宗緯紅領帶培訓計畫 獎助學金名單</h1>
        <p>
          黃楷翔
          <br />
          蔡尚倫
        </p>
      </div>
      <div className='close'>
        <Button onClick={onClose}>
          <Button.Close />
        </Button>
      </div>
    </div>
  );
});
export default NewsDialog;
