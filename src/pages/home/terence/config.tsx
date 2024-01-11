import { createContext, Dispatch, SetStateAction } from 'react';

export type TTerenceState = { trigger: boolean; index: number };
export type TTerenceContext = [TTerenceState, Dispatch<SetStateAction<TTerenceState>>];

export const TerenceState: TTerenceState = { trigger: false, index: 0 };
export const TerenceContext = createContext<TTerenceContext>([TerenceState, () => {}]);

export const TerenceMenu = [
  { title: '認識林宗緯', subTitle: 'About Terence' },
  { title: '我眼中的林宗緯', subTitle: 'Foreword' },
  { title: '林宗緯的七種特質', subTitle: '7 The Seven Attributes of Terence' },
  { title: '林宗緯語錄', subTitle: 'Quotes' },
];

export const TerenceForewordList = [
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
