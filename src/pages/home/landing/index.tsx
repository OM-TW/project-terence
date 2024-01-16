import QuickApply from '@/components/quickApply';
import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import Grid from './grid';
import Header from './header';
import './index.less';

const Container = memo(({ children }: IReactProps) => (
  <div className='w-full h-full'>{children}</div>
));

const Landing = memo(() => (
  <section className='Landing'>
    <Container>
      <Grid />
      <Header />
      <QuickApply />
    </Container>
  </section>
));
export default Landing;
