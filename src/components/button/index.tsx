import { IReactProps } from '@/settings/type';
import { ReadyOnly } from '@/settings/type-unity';
import { twMerge } from 'tailwind-merge';
import Apply from './apply';
import Close from './close';
import Collapse from './collapse';
import Course from './course';
import Drawer from './drawer';
import More from './more';
import Regular from './regular';
import Terence from './terence';

type T = ReadyOnly<{
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}>;

const Button = ({ children, onClick, className, style }: IReactProps & T) => (
  <button className={twMerge(className)} style={style} onClick={onClick}>
    {children}
  </button>
);

Button.Regular = Regular;
Button.Apply = Apply;
Button.Drawer = Drawer;
Button.Close = Close;
Button.Course = Course;
Button.Collapse = Collapse;
Button.More = More;
Button.Terence = Terence;

export default Button;
