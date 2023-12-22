import { IReactProps } from '@/settings/type';
import { ReadyOnly } from '@/settings/type-unity';
import Apply from './apply';
import Regular from './regular';
import Drawer from './drawer';
import { twMerge } from 'tailwind-merge';

type T = ReadyOnly<{
  onClick?: () => void;
  className?: string;
}>;

const Button = ({ children, onClick, className }: IReactProps & T) => {
  return (
    <button className={twMerge(className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.Regular = Regular;
Button.Apply = Apply;
Button.Drawer = Drawer;

export default Button;
