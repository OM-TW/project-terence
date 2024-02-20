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
        '在數據海中挖掘洞察，產生觀點',
        '應用數據驅動工具，規劃品牌線上線下的行銷活動',
        '以顧客為核心，設計個人化的品牌體驗、打造創新數位平台或服務',
        '從零開始打造有意義的數位互動平台',
      ],
    },
    {
      title: '貢獻能力',
      traits: 'Skill',
      items: [
        '利用數據工具產生策略觀點',
        '品牌數位策略研究和用戶體驗流程設計',
        '協助控管數位技術專案流程',
        '溝通協調新行銷技術的應用',
        '參與 CRM/SCRM 的常規運營與報告',
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

export const OpenAsideList = [
  {
    title: '總之不是你以為的那個業務',
    body: [
      '代理商的業務不僅止於溝通橋樑，是品牌一條龍服務的關鍵領頭羊、',
      '是整合一切瑣碎與創意專案管理製作人、更是行銷最前線的顧問。',
      '任何科系都能在此起步、找到最適合你的戰鬥位置，行得瀟灑、有你的專屬風格，才夠真本事。',
    ],
  },
  {
    title: '連結生意與創意的重要橋樑',
    body: [
      '透過觀察外在行為、分析內在動機，精準找出核心課題，憑依著獨特洞察，指引專案往正確的方向前進；',
      '並讓創意人員在天馬行空之餘，能真正發揮動人的影響力。',
    ],
  },
  {
    title: '能把尋常之事，說出一朵不一樣的花',
    body: [
      '這時代的動人故事不只是說書人自說自話，更是和聽故事的人同理、共享、交換價值觀與體驗。',
      '做創意，就要：能說，能做，能觸動。',
    ],
  },
  {
    title: '你和我、我和他、他和他的關係',
    body: [
      '公關不只關注消費者，更涵蓋品牌與公眾上各種利害關係人（Stakeholder）的「全面」關係。Ｏ如：外部──媒體、非營利組織、政府單位；內部──員工。',
      '公關需善於挖掘利害關係人之洞察，發展有感議題，透過具影響力的議題內容，藉由具影響力的接觸媒介與形式，創造別人幫你好話的機會，建立企業聲譽、讓品牌真正發揮影響力。',
    ],
  },
  {
    title: '時代中的個人、理性中的感性、數位中的你各位',
    body: [
      '消費者體驗是指消費者與品牌的產品和服務互動，所產⽣的感知和感受的總和，跨越了品牌與消費者之間的整個交互旅程和⽣命週期。',
      '消費者體驗不僅包含⼈類理性的思考，更融合了複雜的情感、感覺和情緒在內。我們透過數據、科技和創意的運用融合，為品牌策劃並落實具個人化的消費者體驗。',
    ],
  },
];
