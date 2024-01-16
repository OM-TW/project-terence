import { memo, useEffect } from 'react';
import './body.less';
import { IReactProps } from '@/settings/type';

type T = IReactProps & {
  year: string;
};

const Card = memo(({ children, year }: T) => {
  return (
    <div className='col'>
      <div>{year}</div>
      <div>{children}</div>
    </div>
  );
});

const Body = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Body'>
      <div className='px-5 lg:pl-96 py-20 space-y-10'>
        <Card year='1994'>
          林宗緯如願進入臺灣中國文化大學就讀他的第一志願，廣告系。他把握大學四年的每一分鐘認真學習，因為他知道，自己正一步一步接近心中的夢想。那時候的他，已經在包括花旗整合行銷創意和時報廣告金犢獎等多項廣告創意競賽中嶄露頭角，並為日後的廣告生涯打下堅實的基礎。
        </Card>
        <Card year='2000'>
          林宗緯退伍後，正式開始了他的廣告生涯。一年之後，他實現了他的第一個目標，進入臺灣奧美廣告。林宗緯的專業經歷既豐富又精采，他服務過臺灣最大的消費性電子品牌Motorola；並將嶄新的網路商業領域eBay成功帶入臺灣市場(獲得年度最佳行銷個案)；參與大眾運輸革新里程碑的臺灣高鐵品牌上市；經歷全球知名藥廠GSK嚴謹的行銷作業(統籌台港新馬四區上市計畫)；以及投入臺灣賓士汽車品牌年輕化的工程
          (獲得賓士全球Star
          Award金獎)，他以業務總監的角色直接參與了無數360度品牌傳播計畫的作業與決策。
        </Card>
        <Card year='2005'>
          他獲選奧美亞太區AAC計畫的臺灣代表，此時的他，已經是奧美集團最閃亮耀眼的新星。
        </Card>
        <Card year='2007'>
          10月調升北京奧美廣告業務群總監負責TCL、賓士汽車及國美電器，並多次贏得具有里程碑意義的大型客戶比稿。在奧美的歲月中，他結識了與他氣味相投的工作夥伴也是最好的朋友們，並且找到他一生摯愛的伴侶，蘇宇鈴。
        </Card>
      </div>
    </div>
  );
});
export default Body;
