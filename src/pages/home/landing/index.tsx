import QuickApply from '@/components/quickApply';
import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import Grid from './grid';
import Header from './header';
import './index.less';

const Container = memo(({ children }: IReactProps) => (
  <div className='w-full h-1/2'>{children}</div>
));

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Landing'>
      <Container>
        <Grid />
        <Header />
        <QuickApply />
      </Container>
    </section>
  );
});
export default Landing;
