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
  { date: '2024-2-22', name: '開始收件' },
  { date: '2024-3-16', name: '紅領帶說明會' },
  { date: '2024-3-31', name: '截止收件' },
  { date: '2024-4-9', name: '舉行筆試' },
  { date: '2024-4-26', name: '公布口試名單' },
  { date: '2024-5-4', name: '舉行口試' },
  { date: '2024-5-8', name: '公布培訓名單' },
  { date: '2024-7-1', name: '培訓開始' },
];

export const ScheduleFAQ = [
  {
    title: '紅領帶計畫是什麼性質的培訓計畫？我需要負責勞務產出與工作責任嗎？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '如果不會使用圖像設計或影像剪輯軟體，申請人作品該如何呈現？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '完全不是行銷、傳播、廣告科系出生的人、也可以報名嗎？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '不是相關科系的學生，在培訓時會不會遇到什麼困難？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '業務部、策略部、創意部有什麼不一樣？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '兩個月的培訓過程之後，是否可以進入奧美工作？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
  {
    title: '是否每一個進來培訓的紅領帶訓練生都能獲得兩萬元獎助金？',
    body: '紅領帶計畫的訓練生不必負責勞務產出與工作責任。我們每週都會安排專屬講師為紅領帶上課，並且能夠貼身觀察日常工作，也無強制規定訓練生的出席時數，更不需負擔任何實質工作內容。好好一起玩、一起學習、一起探索自己適不適合這個行業，是這個計畫的初衷。',
  },
];
