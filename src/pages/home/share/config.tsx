import { createContext, Dispatch, SetStateAction } from 'react';

export type TShareState = { trigger: boolean; index: number; percent: number; th: number };
export type TShareContext = [TShareState, Dispatch<SetStateAction<TShareState>>];

export const ShareState: TShareState = { trigger: false, index: 0, percent: 0, th: 0 };
export const ShareContext = createContext<TShareContext>([ShareState, () => {}]);

export const ShareList = [
  {
    name: '卓宜蓁',
    engName: 'Verna Cho',
    content: (
      <>
        「最喜歡在樓梯間盯著魚缸裡的血鸚鵡發呆，其次是聽不知從何而來的大笑聲響徹整個樓層，真開心。」
      </>
    ),
  },
  {
    name: '邱慧琪',
    engName: 'Vicky Khoo',
    content: <>「做自己」我是因為這三個字來到這裡的。</>,
  },
  {
    name: '林堉涵',
    engName: 'Pi Lin',
    content: (
      <>
        理性，是我的生活哲學。
        機率、比率、期望值、量尺、性價比、投資報酬率或邊際效益，我常提醒自己要把這...
      </>
    ),
  },
  {
    name: '盧亭軒',
    engName: 'Iris Lu',
    content: (
      <>
        第一天踏入奧美，team
        members不在，但關心並不減。一張紙條撫平了我因陌生而不安的心，並約我隔第一天踏入奧美，team
        members不在，但關心並不減。一張紙條撫平了我因陌生而不安的心，並約我隔第一天踏入奧美，team
        members不在，但關心並不減。一張紙條撫平了我因陌生而不安的心，並約我隔第一天踏入奧美，team
        members不在，但關心並不減。一張紙條撫平了我因陌生而不安的心，並約我隔第一天踏入奧美，team
        members不在，但關心並不減。一張紙條撫平了我因陌生而不安的心，並約我隔
      </>
    ),
  },
  {
    name: '麥海柔',
    engName: 'Bessie Mai',
    content: (
      <>
        老實說，完全不想好好的靜下心來打這篇心得，不是因為拖延症又犯了，而是因為有太多回憶
        我還來不及整理和封...
      </>
    ),
  },
  {
    name: '王力萱',
    engName: 'Abu Wang',
    content: (
      <>
        「嗶——嗶——啵——」連線中請稍候⋯⋯這是太空連接地球的訊號，今天要跟大家分享外星人降落紅色星球的故事。
      </>
    ),
  },
];
