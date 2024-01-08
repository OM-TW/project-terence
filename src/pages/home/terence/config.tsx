import { createContext, Dispatch, SetStateAction } from 'react';

export type TTerenceState = { trigger: boolean; index: number };
export type TTerenceContext = [TTerenceState, Dispatch<SetStateAction<TTerenceState>>];

export const TerenceState: TTerenceState = { trigger: false, index: 0 };
export const TerenceContext = createContext<TTerenceContext>([TerenceState, () => {}]);

export const TerenceMenu = [
  { title: '認識林宗緯', subTitle: 'About Terence' },
  { title: '我眼中的林宗緯', subTitle: 'Foreword' },
  { title: '林宗緯的七種特質', subTitle: '7 The Seven Attributes of Terence' },
  { title: '林宗緯語錄', subTitle: 'Quotes' },
];
