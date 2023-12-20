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
