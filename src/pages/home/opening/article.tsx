import { memo, useContext, useMemo } from 'react';
import './article.less';
import { OpenArticleList, OpeningContext, TOpenArticle } from './config';
import { TweenProvider } from 'lesca-use-tween';

const Quote = ({ data, index }: { data: TOpenArticle; index: number }) => {
  return (
    <div className='quote'>
      <TweenProvider
        initStyle={{ opacity: 0 }}
        tweenStyle={{ opacity: 1 }}
        options={{ delay: 100 * index }}
      >
        <h3>{data.traits}</h3>
      </TweenProvider>
      <TweenProvider
        initStyle={{ opacity: 0 }}
        tweenStyle={{ opacity: 1 }}
        options={{ delay: 100 * index + 100 }}
      >
        <h1>{data.title}</h1>
      </TweenProvider>
      <div className='w-full'>
        <ol>
          {data.items.map((text, i) => {
            return (
              <TweenProvider
                key={text}
                initStyle={{ opacity: 0 }}
                tweenStyle={{ opacity: 1 }}
                options={{
                  delay: 100 * index + 100 + 100 + i * 50,
                }}
              >
                <li>{text}</li>
              </TweenProvider>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

const Article = memo(() => {
  const [state] = useContext(OpeningContext);
  const { index } = state;
  const currentArticle = useMemo(() => OpenArticleList[index], [index]);
  return (
    <article className='Article'>
      <div>
        {currentArticle.map((e, index) => (
          <Quote key={JSON.stringify(e)} data={e} index={index} />
        ))}
      </div>
    </article>
  );
});
export default Article;
