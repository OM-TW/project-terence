import { createContext, Dispatch, SetStateAction } from 'react';

export type TForewordState = { percent: number };
export type TForewordContext = [TForewordState, Dispatch<SetStateAction<TForewordState>>];

export const ForewordState = { percent: 0 };
export const ForewordContext = createContext<TForewordContext>([ForewordState, () => {}]);

export const SlideSize = {
  min: 600,
  max: 1280,
};
