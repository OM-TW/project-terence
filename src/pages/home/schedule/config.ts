import { createContext, Dispatch, SetStateAction } from 'react';

export enum SchedulePageType {
  Process = '/process',
  Faq = '/faq',
}

export enum ScheduleStepType {
  Unset,
  StartReceiving,
  Seminar,
  StopReceiving,
  Written,
  AnnounceShortlist,
  Oral,
  AnnounceTrainingList,
  TrainingStarts,
}

export type TScheduleState = { step: ScheduleStepType; page: SchedulePageType };
export type TScheduleContext = [TScheduleState, Dispatch<SetStateAction<TScheduleState>>];

export const ScheduleState = { step: ScheduleStepType.Unset, page: SchedulePageType.Process };
export const ScheduleContext = createContext<TScheduleContext>([ScheduleState, () => {}]);

export const ScheduleTimeline = [
  { date: '02/15', name: '開始收件' },
  { date: '03/14', name: '紅領帶說明會' },
  { date: '03/26', name: '截止收件' },
  { date: '03/29', name: '舉行筆試' },
  { date: '04/13', name: '公布入圍名單' },
  { date: '04/22', name: '舉行口試' },
  { date: '04/26', name: '公布培訓名單' },
  { date: '04/26', name: '培訓開始' },
];
