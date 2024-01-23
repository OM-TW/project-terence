import { createContext, Dispatch, SetStateAction } from 'react';

export type TAboutState = { trigger: boolean; index: number };
export type TAboutContext = [TAboutState, Dispatch<SetStateAction<TAboutState>>];

export const TerenceState: TAboutState = { trigger: false, index: 0 };
export const TerenceContext = createContext<TAboutContext>([TerenceState, () => {}]);

export const AboutMenu = [
  { title: '認識林宗緯', subTitle: 'About Terence' },
  { title: '我眼中的林宗緯', subTitle: 'Foreword' },
  { title: '林宗緯的七種特質', subTitle: '7 The Seven Attributes of Terence' },
  { title: '林宗緯語錄', subTitle: 'Quotes' },
];

export const AboutForewordList = [
  {
    name: '楊明皓',
    englishName: 'Miles Young',
    position: '奧美亞太區董事長',
    positionEnglish: 'Chairman, O&M - Asia Pacific',
    description: (
      <>
        Terence 是個極具個人魅力、充滿熱情又堅守價值信仰的人。
        <br />
        關於他，我想不出有任何負面或批評的話語。
        <br />
        他全心全意的、認真的、活著。
        <br />
        廣告這行業天生就是為 Terence 量身定做的。沒特別的理由，因為他深深愛著我們這個行業。
        <br />
        Terence 將會非常高興地知道，自己正開啟了一個機會大門，讓更多人遵循他的足跡。
      </>
    ),
  },
  {
    name: '占保羅',
    englishName: 'Paul Heath President',
    position: '奧美廣告亞太區總裁',
    positionEnglish: 'Ogilvy & Mather Advertising - Asia Pacific',
    description: (
      <>
        我第一次見到 Terence 是在印尼，當時我們正在舉辦奧美跨國的培訓計劃AAC。
        <br />
        Terence
        極富趣味的幽默感立刻吸引了我，不僅如此，他舉手投足間表露出對廣告單純又懾人的熱情，讓我非常印象深刻。
        <br />
        無庸置疑的， Terence
        在團隊裡是個非常優秀的夥伴，他在台灣服務摩托羅拉時，幫助奧美團隊及客戶打造了一個相當成功的起點；之後，
        Terence 把他的專業及熱情帶到了北京，在那裡，他再度向我們証明，他的才華及熱情讓一切皆有可能。
        <br />
        Terence
        身上，流著清澈的奧美血液，我們會非常深切的想念他，因此我想不出有什麼比紅領帶獎助計畫更好的方式，能彰顯我們對
        Terence 的銘記。透過這個計畫， Terence 將激勵下一代的廣告界領袖，正如同他激勵了我們。
        <br />
        獻上我最深的祝福。
        <br />
        Paul
      </>
    ),
  },
  {
    name: '宋秩銘',
    englishName: 'TB Song',
    position: '奧美大中華區董事長',
    positionEnglish: 'Chairman, O&M Greater China',
    description: (
      <>
        Terence是奧美的好學生，好員工，也是我們未來的明星。 Annie 亦是。
        <br />
        記得去年 Terence 和 Annie 希望來大陸，大陸的同事亦希望他們來，卻沒想到有今天的結果。
        <br />
        我們自責，是否奧美給他太大的壓力，是否我們創造的文化給他的負擔太沉。
        <br />
        相信任何挫折，意外，都是一種提醒。當Terence以生命來提醒我們時，我們應該各自解讀這個訊息。
        <br />
        讓我們永遠記得 Terence 的樂觀、熱情及執著，且不時的想在工作及生活上突破與對夥伴的關心照顧。
        <br />
        TB
      </>
    ),
  },
  {
    name: '莊淑芬',
    englishName: 'Shenan Chuang',
    position: '奧美整合行銷傳播集團中國區 首席執行長',
    positionEnglish: 'CEO, Ogilvy & Mather Group, China',
    description: (
      <>
        一個可愛的大男孩。
        <br />
        一個終其一生矢志做廣告的人。
        <br />
        一個永遠保持專業形象的廣告人。
        <br />
        一個尊敬我又有點怕我的奥美人。
        <br />
        一個試圖以建立幫派方式打造團隊的年輕領導人。
        <br />
        一個壯志未酬卻影響許多人生命的年輕靈魂。
        <br />
        讓我們手牽手心連心，把這個年輕靈魂所遺留在世的熱情，用力地散播到世界各個角落。
      </>
    ),
  },
  {
    name: '白崇亮',
    englishName: 'Joseph Pai',
    position: '台灣奧美集團董事長',
    positionEnglish: 'Chairman, O&M Group',
    description: (
      <>
        Terence 是我見過最熱情的年輕奧美人。
        <br />
        他的臉上總是掛著帶一點孩子氣的天真笑容，也總是在每一項客戶任務與公司活動上盡情投入。
        <br />
        在年輕一代中，他是我們心目中最能代表大衛奧格威精神的一位。
        <br />
        Terence
        走了。追思會上幾句醒目的大字，像極了他要對我們說的話：「我到了天空之城，遇見奧格威先生。他對我說，這裡需要接班人。」
        <br />
        天堂的品牌一定在年輕人當中出了問題，所以繼奧格威之後，又把 Terence 接了去。
        <br />
        Terence，生命因熱情而存在，也從不因死亡而停止。紅熱的奧美心，將始終眺動於每一個奧美人的胸中。
        <br />
        天堂這客戶，交給你了。
      </>
    ),
  },
];

export const AboutSevenList = [
  {
    english: 'TALENT',
    chinese: '才華',
    description:
      '才華，不是從天上掉下來的,他重視閱讀、旅行和認真的生活，從裡頭累積厚實的能量，讓思想保持最佳狀態，讓自己才華洋溢',
  },
  {
    english: 'ENTHUSIASM',
    chinese: '熱情',
    description:
      '熱情，是廣告工作最大的武器，不只是廣告,他對家人、對朋友、對生命，都有著源源不絕的熱情',
  },
  {
    english: 'RESPECT',
    chinese: '尊重',
    description:
      '一身筆挺的西裝不是帥而已，那是因為尊重…尊重工作、專業、細節和正確的價值，尊重每一位獨一無二的夥伴、部屬及老闆，尊重自己，最後贏得別人的尊重',
  },
  {
    english: 'ENERGY',
    chinese: '活力',
    description:
      '無可救藥的樂觀，豪邁爽朗的笑聲，令人噴飯的幽默，他有一顆保養得很好的赤子之心，從那裡頭散發出來的活力，永遠有感染別人的魔力',
  },
  {
    english: 'NEAT',
    chinese: '整潔',
    description:
      '永遠乾淨整潔的桌子，一絲不茍的穿著，條理分明的歸檔，邏輯清楚的表達，他相信，一個專業的好account，必須從整齊打理自己開始，因為連自己都管理不了的人，怎麼能好好管理自己的工作',
  },
  {
    english: 'CURIOSITY',
    chinese: '好奇',
    description:
      '好奇寶寶，歡迎你這樣稱呼他，太陽底下任何新鮮事，他都不放過，比方說開長途車，花錢買票，只為了看一隻有兩個頭的蜥蜴…他酷愛觀察，並對每一件事，提出林宗緯式的精闢見解',
  },
  {
    english: 'CURIOSITY',
    chinese: '追求卓越',
    description:
      '好奇寶寶，歡迎你這樣稱呼他，太陽底下任何新鮮事，他都不放過，比方說開長途車，花錢買票，只為了看一隻有兩個頭的蜥蜴…他酷愛觀察，並對每一件事，提出林宗緯式的精闢見解',
  },
];

export const AboutQuotesList = [
  {
    title: '關於AE要知道的事',
    list: [
      '要當GAD，先當GAE (Good AE)。',
      '麻煩是AE最好的朋友。',
      '不要問客戶能給你什麼，要問你能給客戶什麼。',
      '這麼爛的廣告，直接跳過! 但作為一個負責任的代理商，我們還是來分析一下。',
      '如果Account該做的都做了，還是無法安撫客戶，那就隨緣吧。',
      '面對那些工作上的小人，你更應該要正面迎接他們，甚至感謝他們，因為有他們的刺激，讓你活得更好。',
      '紀律! 紀律! 紀律! 自愛! 自愛! 自愛!',
      '你信不信Logo放再大也不會有人注意到，既然這樣，我們也不用太在意它有多大。',
    ],
  },
  {
    title: '關於專業',
    list: [
      '如果你問我，廣告人為什麼要穿西裝? 那我會問你，你會質疑律師、銀行家為什麼要穿西裝嗎?',
      '給每個職位的人應有的尊重。',
      '要當一個好的廣告人，熱情和態度比專業來得重要多了。',
      '你什麼都可以嫌我，甚至罵我豬，但就是不可以說我 不 專 業 !',
      '在這一行，不會吠的狗，就不是好狗。 (意指在這個行業要會表達)',
    ],
  },
  {
    title: '關於生活態度',
    list: ['認真工作是男人的天職。', '不要輕易放過你自己。'],
  },
  {
    title: '關於一些經常掛在嘴邊',
    list: ['穿西裝不只有「專業」這麼簡單，而是 看 起 來 比 較 瘦!'],
  },
];
