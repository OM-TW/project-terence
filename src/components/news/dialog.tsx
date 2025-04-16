import { Context } from '@/settings/constant';
import { ActionType, TransitionType } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import Button from '../button';

type T = {
  transition: TransitionType;
  onClose: () => void;
  html: string | undefined;
};

const Dialog = memo(({ transition, onClose, html }: T) => {
  const [, setContext] = useContext(Context);
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useTween({ y: window.innerHeight });

  const currentHTML = useMemo(() => {
    if (html) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const blockquote = tempDiv.querySelector('blockquote');
      if (blockquote) {
        const textArray = blockquote.innerText.split(',');
        const spanElements = textArray.map((text) => `<span>${text.trim()}</span>`).join('');
        const div = document.createElement('div');
        div.classList.add('grid', 'grid-cols-3', 'lg:grid-cols-6', 'gap-2', 'lg:px-40', 'px-10');
        div.innerHTML = spanElements;
        blockquote.replaceWith(div);
      }
      return tempDiv.innerHTML;
    }
    return html || '';
  }, [html]);

  useEffect(() => {
    if (transition === TransitionType.FadeIn) setStyle({ y: 0 }, { duration: 500, delay: 200 });
  }, [transition]);

  useEffect(() => {
    const a = ref.current?.getElementsByTagName('a');
    if (a) {
      [...a].forEach((e) => {
        e.addEventListener('click', () => {
          setContext({ type: ActionType.News, state: { enabled: false } });
        });
      });
    }
  }, []);

  return (
    <div className='dialog' style={style}>
      <div ref={ref} className='content' dangerouslySetInnerHTML={{ __html: currentHTML || '' }} />
      <div className='close'>
        <Button onClick={onClose}>
          <Button.Close />
        </Button>
        <div className='hidden px-10 lg:px-40' />
      </div>
    </div>
  );
});

const NewsDialog = memo(({ transition, onClose }: Omit<T, 'html'>) => {
  const [context] = useContext(Context);
  const { news } = context;
  return <Dialog transition={transition} onClose={onClose} html={news?.html} />;
});
export default NewsDialog;
