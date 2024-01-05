import Card from "@/components/Card";
import NTUGIL from "@/assets/NTUGIL.png";
import NTUCLA from "@/assets/NTUCLA.png";
import FadeIn from "@/components/FadeIn";

export default function team() {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40">
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">Our Team</h1>
      </div>
      <div className="my-10 space-y-20">
        <FadeIn>
          <h1 className="text-center text-4xl font-bold my-5">
            台灣語奧委員會
          </h1>
          <div className="text-lg">
            <p>
              &emsp;&emsp;為使語奧賽事與培訓活動順利運作，於2018年成立台灣語奧委員會（以下簡稱語委會），制定明確選拔規定與培訓課程，2019年更投入亞太語奧的發起與推動，2022年擴編台灣語奧委員會成員並進行分組分工，以促進推動語奧及語言科學活動培育未來人才。
            </p>
          </div>
          <div className="border-amber-200 border-2 p-5 my-5 shadow-md bg-amber-50">
            <h2 className="text-2xl font-bold leading-10">語委會組織成員：</h2>
            <ul className="text-lg leading-8">
              <li>
                <b>競賽行政組：</b>
                計畫主持人謝舒凱、兼任行政助理（林欣誼、林建志、連子力）
              </li>
              <li>
                <b>公關組：</b>益閣教育團隊（賴彥甫、Rebecca Hsu）、蔡碧玲
                Rebecca Tsai、王薇森 WANG, WEI-SEN
              </li>
              <li>
                <b>培訓推廣組：</b>蕭素英、郭貞秀、江豪文
              </li>
              <li>
                <b>命題組：</b>雷翔宇、林濬祺
              </li>
            </ul>
          </div>
          <div className="text-lg">
            <p>
              &emsp;&emsp;2025年第二十二屆國際語奧之籌辦團隊亦將以語委會成員為基礎，進行人員擴編與志工招募。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <h1 className="text-center text-4xl font-bold my-5">主辦單位</h1>
          <div className="flex flex-row">
            <Card name="國立台灣大學語言學研究所" image={NTUGIL} height={200} />
            <Card name="國立台灣大學文學院" image={NTUCLA} width={400} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
