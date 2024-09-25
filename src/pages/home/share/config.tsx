import { createContext, Dispatch, SetStateAction } from 'react';
import { THomeShare } from '../config';

export type TShareState = {
  trigger: boolean;
  index: number;
  percent: number;
  th: number;
  data: { [k: string]: THomeShare[] };
};
export type TShareContext = [TShareState, Dispatch<SetStateAction<TShareState>>];

export const ShareState: TShareState = {
  trigger: false,
  index: 0,
  percent: 0,
  th: new Date().getFullYear() - 2008 - 1,
  data: {},
};
export const ShareContext = createContext<TShareContext>([ShareState, () => {}]);
