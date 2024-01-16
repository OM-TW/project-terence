import { createContext, Dispatch, SetStateAction } from 'react';

export const HomePages = [
  { page: 'landing', name: '首頁' },
  { page: 'tie', name: '年度視覺' },
  { page: 'opening', name: '招募職務' },
  { page: 'course', name: '大師獨家課' },
  { page: 'application', name: '如何申請' },
  { page: 'schedule', name: '申請流程與FQA' },
  { page: 'project', name: '紅領帶計畫介紹' },
  { page: 'share', name: '就是相信自己，永遠可以更棒' },
  { page: 'about', name: '他是林宗緯' },
];

export enum HomeStepType {
  unset,
  loaded,
  fontLoaded,
}
export type THomeState = { step: HomeStepType };
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState = { step: HomeStepType.unset };
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
