import { createContext, Dispatch, SetStateAction } from 'react';

export type TCourseState = { index: number; trigger: boolean };
export type TCourseContext = [TCourseState, Dispatch<SetStateAction<TCourseState>>];

export const CourseState = { index: 0, trigger: false };
export const CourseContext = createContext<TCourseContext>([CourseState, () => {}]);

export const CourseMonsters = [
  {
    className: 'Presentation Skill',
    name: '呂豐餘 F.Y Lu',
    position: '集團董事總經理',
    description: (
      <>
        他深信好的廣告具有無比的影響力
        <br />
        而且會讓世界變得更好。
      </>
    ),
  },
  {
    className: '廣告基本要件',
    name: '曾致暐 Derrick Tseng',
    position: '董事總經理',
    description: (
      <>
        廣告是物理的科學，心理的藝術。
        <br />
        我們理性說服，感性影響。
      </>
    ),
  },
  {
    className: 'Communication Design',
    name: '莊若芸 Zoe Chuang',
    position: '董事總經理',
    description: <>你的人生有兩個選擇，來過或沒來過。</>,
  },
  {
    className: 'Big Idea',
    name: '龔大中 Giant Kung',
    position: '集團創意長',
    description: (
      <>
        在未竟的天空之城，我們說的都是那些非常 old
        <br />
        fashioned 的故事。
      </>
    ),
  },
  {
    className: '社群創意',
    name: '蔣依潔 EJ Chiang',
    position: '執行創意總監暨社群總指導',
    description: <>讓紅領帶陪你找到當代最有感染力的解決方案。</>,
  },
  {
    className: '顧客體驗',
    name: '郭育滋 Veronica Kuo',
    position: '集團數位長',
    description: (
      <>
        每一個偉大而成功的品牌，
        <br />
        絕不只是形象包裝得夠好而已，
        <br />
        而是懂得以消費者為中心，
        <br />
        不斷地因時制宜，
        <br />
        提供令人滿意甚至充滿驚喜的個人化顧客體驗。
      </>
    ),
  },
  {
    className: '策略原理',
    name: '葉明桂 Mingguay Yeh',
    position: '集團首席策略顧問',
    description: (
      <>
        對創意不夠熱情的，在我們這行待不久。
        <br />
        但在這行卻可以學到很多。
      </>
    ),
  },
  {
    className: '策略跟你想的一樣嗎',
    name: '施淑芳 Amy Shih',
    position: '集團策略長',
    description: (
      <>
        策略，即是解題，充滿創意、同時有效地解題。
        <br />
        無論是乘船、飛機、抑或火箭，只要能達彼方，就不只萬法千方。
      </>
    ),
  },
  {
    className: '公關危機',
    name: '張裕昌 Adonis Chang',
    position: '總經理',
    description: <>公關人要自信，優雅並從容的影響世界。</>,
  },
];
