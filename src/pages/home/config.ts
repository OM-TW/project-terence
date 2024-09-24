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
  { page: 'cookies', name: '隱私聲明' },
];

export type THomeSchedule = {
  contacts: string;
  general: string;
  written: string;
  oral: string;
  target: string;
  schedule: string;
  timestamp: number;
};

export type THomeNews = {
  html: string;
  timestamp: number;
};

export type THomeShare = {
  session: number;
  name: string;
  engName: string;
  html: any;
};

export enum HomeStepType {
  unset,
  loaded,
  fontLoaded,
}
export type THomeState = {
  step: HomeStepType;
  schedule: THomeSchedule;
  news: THomeNews;
  share: THomeShare[];
};
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = {
  step: HomeStepType.unset,
  schedule: {
    contacts: '',
    general: '',
    written: '',
    oral: '',
    target: '升大四至研究所學生(2024.07-08需有在學身分)',
    schedule: '',
    timestamp: 0,
  },
  news: {
    html: '',
    timestamp: 0,
  },
  share: [],
};
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
