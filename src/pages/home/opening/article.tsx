import { memo, useContext, useMemo } from 'react';
import './article.less';
import { OpenArticleList, OpeningContext, TOpenArticle } from './config';

const Quote = ({ data }: { data: TOpenArticle }) => {
  return (
    <div className='quote'>
      <h3>{data.traits}</h3>
      <h1>{data.title}</h1>
      <div className='w-full'>
        <ol>
          {data.items.map((text) => {
            return <li key={text}>{text}</li>;
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
        {currentArticle.map((e) => (
          <Quote key={JSON.stringify(e)} data={e} />
        ))}
      </div>
    </article>
  );
});
export default Article;
