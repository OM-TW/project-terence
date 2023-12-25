import { IReactProps } from '@/settings/type';
import { ReadyOnly } from '@/settings/type-unity';
import Apply from './apply';
import Regular from './regular';
import Drawer from './drawer';
import { twMerge } from 'tailwind-merge';
import Close from './close';
import Course from './course';

type T = ReadyOnly<{
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}>;

const Button = ({ children, onClick, className, style }: IReactProps & T) => {
  return (
    <button className={twMerge(className)} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.Regular = Regular;
Button.Apply = Apply;
Button.Drawer = Drawer;
Button.Close = Close;
Button.Course = Course;

export default Button;
