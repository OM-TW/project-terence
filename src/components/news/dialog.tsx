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
        <h1>【第十六屆 奧美紅領帶計劃】 報名開始</h1>
        <p>
          詳細申請流程請參考 [
          <a href='#application' onClick={onClose}>
            如何申請
          </a>
          ]
        </p>
        <h1>【第十六屆 奧美紅領帶計劃說明會】</h1>
        <p>2024/3/16 (六) 13:00-18:00 紅領帶說明會 @ 台灣奧美</p>
        <p>
          說明會除有紅領帶校友說明紅領帶計畫內容外，
          <br />
          更將邀請奧美現職講師，
          <br />
          介紹業務、創意、策略、數位、公關，五大領域之工作內容，
          <br />
          讓你一探奧美、紅領帶究竟在做什麼？
        </p>
        <p>
          [
          <a className='font-noto-black' href='https://forms.gle/eYRPT5RhGKTCxgq18' target='_blank'>
            前往報名說明會
          </a>
          ]
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
