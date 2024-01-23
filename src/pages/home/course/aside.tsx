import { memo, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import './aside.less';
import { CourseContext, CourseMonsters } from './config';
import { TweenProvider } from 'lesca-use-tween';

const Aside = memo(() => {
  const [state] = useContext(CourseContext);
  const { trigger, index } = state;

  const description = useMemo(() => {
    if (!trigger) {
      return (
        <p>
          集結眾多大師的精采課程，
          <br />
          傳承奧美的經驗、經典的廣告智慧，
          <br />
          陪伴大家一起學習、一起成長！
        </p>
      );
    }
    return (
      <>
        <TweenProvider
          key={`h1${index}`}
          initStyle={{ opacity: 0, y: 100 }}
          tweenStyle={{ opacity: 1, y: 0 }}
          options={{ delay: 0, duration: 500 }}
        >
          <h2>{CourseMonsters[index].className}</h2>
        </TweenProvider>
        <TweenProvider
          key={`h2${index}`}
          initStyle={{ opacity: 0, y: 100 }}
          tweenStyle={{ opacity: 1, y: 0 }}
          options={{ delay: 100, duration: 500 }}
        >
          <p>
            {CourseMonsters[index].name}
            <br />
            {CourseMonsters[index].position}
          </p>
        </TweenProvider>
        <TweenProvider
          key={`h3${index}`}
          initStyle={{ opacity: 0, y: 100 }}
          tweenStyle={{ opacity: 1, y: 0 }}
          options={{ delay: 200, duration: 500 }}
        >
          <p>{CourseMonsters[index].description}</p>
        </TweenProvider>
      </>
    );
  }, [index, trigger]);

  return (
    <aside className={twMerge('Aside', trigger ? 'z-20' : '', trigger ? 'fixed' : 'absolute')}>
      <div className={trigger ? 'on' : ''}>
        <div className='squire' />
        <div className='descriptions'>
          <h1>大師獨家課</h1>
          <span>Course</span>
          {description}
        </div>
      </div>
    </aside>
  );
});
export default Aside;
