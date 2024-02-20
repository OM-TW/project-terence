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
  { date: '2024-4-24', name: '公布口試名單' },
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
    body: '申請人作品形式不拘，平面廣告、影片廣告、廣告文案、圖像拼貼、文字概念描述…等，只需能清楚呈現你的觀點與想法，皆可做為申請作品的形式。',
  },
  {
    title: '完全不是行銷、傳播、廣告科系出生的人、也可以報名嗎？',
    body: '可以！能力和特質比學歷重要得多，不是相關科系的學生，想想辦法充實自己、接近這個領域，就有機會拿到門票！',
  },
  {
    title: '不是相關科系的學生，在培訓時會不會遇到什麼困難？',
    body: '其實是不會的，我們非常歡迎任何科系對行銷傳播產業有興趣的學生，即使非相關科系出身，公司內同仁也會耐心教導，讓大家都可以學習行銷傳播行業的各種業務及大小事，這點可以放心。',
  },
  {
    title: '業務部、策略部、創意部有什麼不一樣？',
    body: '業務人員是客戶服務的重要窗口，也是奧美裡頭最了解客戶的人，負責啟動策略人員及創意人員發展傑出的傳播策略及idea，在有限的資源及時間內，確保campaign執行成果。策略人員是奧美裡頭最了解消費者的人，針對每次客戶品牌及產品問題，提出有效的傳播策略規劃，做為整個campaign啟動的指南針。創意人員是奧美重要的資產，主要負責創意idea發展，並確保創意實際產出品質。',
  },
  {
    title: '兩個月的培訓過程之後，是否可以進入奧美工作？',
    body: '培訓期間如果表現優良，很有機會優先成為正式員工。',
  },
  {
    title: '是否每一個進來培訓的紅領帶訓練生都能獲得兩萬元獎助金？',
    body: '否。紅領帶委員將審核訓練生在培訓期間的實際表現及期末報告內容，從中選出表現傑出者頒發兩萬元獎助金。',
  },
];
