import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import Grid from './grid';
import Header from './header';
import './index.less';
import Quick from './quick';

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
        <Quick />
      </Container>
    </section>
  );
});
export default Landing;
