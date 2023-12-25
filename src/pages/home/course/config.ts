import { createContext, Dispatch, SetStateAction } from 'react';
import { Description0, Description1, Description2, Description3 } from './description';

export type TCourseState = { index: number; trigger: boolean };
export type TCourseContext = [TCourseState, Dispatch<SetStateAction<TCourseState>>];

export const CourseState = { index: 0, trigger: false };
export const CourseContext = createContext<TCourseContext>([CourseState, () => {}]);

export const CourseMonsters = [
  {
    className: 'Presentation Skill',
    name: '呂豐餘 F.Y Lu',
    position: '集團董事總經理',
    description: Description0,
  },
  {
    className: '廣告基本要件',
    name: '曾致暐 Derrick Tseng',
    position: '董事總經理',
    description: Description1,
  },
  {
    className: 'Communication Design',
    name: '莊若芸 Zoe Chuang',
    position: '董事總經理',
    description: Description2,
  },
  {
    className: 'Big Idea',
    name: '龔大中 Giant Kung',
    position: '集團創意長',
    description: Description3,
  },
];
