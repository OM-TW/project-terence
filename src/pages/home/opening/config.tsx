import { createContext, Dispatch, SetStateAction } from 'react';

export type TOpeningState = { index: number };
export type TOpeningContext = [TOpeningState, Dispatch<SetStateAction<TOpeningState>>];

export const OpeningState = { index: 0 };
export const OpeningContext = createContext<TOpeningContext>([OpeningState, () => {}]);

export type TOpenArticle = {
  title: '培訓面向' | '貢獻能力' | '期待特質';
  traits: 'Training' | 'Skill' | 'Traits';
  items: string[];
};
export type TOpenArticleList = [TOpenArticle, TOpenArticle, TOpenArticle];

export const OpenArticleList: TOpenArticleList[] = [
  [
    {
      title: '培訓面向',
      traits: 'Training',
      items: [
        '全面體驗專案從無到有的過程',
        '了解商業課題產出創意解決方案的背後思考',
        '訓練溝通與說服策略技巧',
        '資訊的梳理與歸納',
      ],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: ['溝通協調與各單位專案協作', '創意刺激與案例研究', '專案庶務執行力'],
    },
    {
      title: '期待特質',
      traits: 'Traits',
      items: ['對人性、事物充滿好奇心', '喜歡統籌、具備強大行動力', '樂於與人交流、溝通'],
    },
  ],
  [
    {
      title: '培訓面向',
      traits: 'Training',
      items: ['品牌商業課題界定與解決', '奧美獨家策略心法與思維', '系統性思考、表達與呈現'],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: [
        '協助蒐整消費者行為與市場趨勢',
        '從行為觀察聚焦提煉出人性洞察',
        '協助完成理性與感性兼備的提案',
      ],
    },
    {
      title: '期待特質',
      traits: 'Traits',
      items: ['對世間萬物有自己的見解', '好奇大眾行為背後的原因', '享受有邏輯、系統的思考'],
    },
  ],
  [
    {
      title: '培訓面向',
      traits: 'Training',
      items: [
        '參與創意簡報到發想執行',
        '從說得精準，到說得精妙',
        '鍛鍊垂直與水平思考整合',
        '提升創意鑑賞能力與標準',
      ],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: ['積極參與表達與討論', '懂得團隊分工與合作', '積極收集與分析案例'],
    },
    {
      title: '期待特質',
      traits: 'Traits',
      items: ['享受發想時的痛並快樂著', '縝密觀察與注意人心所向', '敢於深掘並表達與眾不同'],
    },
  ],
  [
    {
      title: '培訓面向',
      traits: 'Training',
      items: [
        '參與公關提案，從資料蒐集、發想到執行',
        '建立溝通應對技巧與標準',
        '參與協助媒體或 KOL 連繫、活動執行',
      ],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: [
        '積極參與表達與討論',
        '了解團隊分工與合作',
        '積極收集與分析案例',
        '成效分析與報告撰寫',
      ],
    },
    {
      title: '期待特質',
      traits: 'Traits',
      items: ['尊重與積極開放的態度', '對人事物具備同理心、好奇心', '享受多方協調及壓力下的成長'],
    },
  ],
  [
    {
      title: '培訓面向',
      traits: 'Training',
      items: [
        '藉由數據的挖掘分析，產生洞察與觀點',
        '應用數據驅動的行銷方法和工具，規劃品牌獲客和留客的行銷活動',
        '以顧客為核心，設計個人化的品牌體驗、打造創新數位平台或服務（包含UX/UI設計、忠誠度禮遇計畫、數位平台上的服務功能...等）',
        '了解如何從零開始打造有意義的數位互動平台，包含的項目管理與溝通協調',
      ],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: [
        '協助利用數據工具蒐整數據並產生觀點',
        '參與品牌體驗策略研究和用戶體驗流程設計',
        '協助控管數位技術相關專案之流程和時程，確保交付',
        '溝通協調新行銷技術應用，包含與開發團隊的溝通',
        '支援 CRM/SCRM 的常規運營與報告',
        '協助 Martech 系統的操作',
      ],
    },
    {
      title: '期待特質',
      traits: 'Traits',
      items: [
        '對數字敏感，喜愛分析數據',
        '對數位行銷、細分人群和個人化傳播與體驗有想法',
        '對前瞻性行銷技術應用具有憧憬並躍躍欲試',
        '具有創新的解決問題思維、堅持不懈',
        '擅長團隊協作與溝通',
      ],
    },
  ],
];
