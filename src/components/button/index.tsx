import { IReactProps } from '@/settings/type';
import { ReadyOnly } from '@/settings/type-unity';
import Apply from './apply';
import Regular from './regular';

type T = ReadyOnly<{
  onClick?: () => void;
}>;

const Button = ({ children, onClick }: IReactProps & T) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.Regular = Regular;
Button.Apply = Apply;

export default Button;
