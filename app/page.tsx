import Image from "next/image";
import Link from "next/link";
import background from "../assets/slide1.jpg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={background}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="flex items-center absolute bottom-0 w-full h-full">
          <div className="m-auto text-amber-50 text-center font-bold">
            <h1 className="my-2 text-6xl">IOL 2025 Taipei, Taiwan</h1>
            <h2 className="text-2xl">
              台灣將於2025年首次主辦國際語言學奧林匹亞競賽
            </h2>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="text-center text-4xl font-bold my-5">簡介</h1>
        <div className="flex flex-row my-5">
          <div className="basis-1/2 bg-cyan-100 p-10 m-5 shadow-md">
            <h2 className="text-2xl font-bold">國際語奧是什麼？</h2>
            <br />
            <p>
              國際語言學奧林匹亞競賽(The International Linguistics Olympiad,
              IOL)是屬於全球中學生的12項科學奧林匹亞競賽之一，自2003年開始，每年在不同國家輪流舉行。參賽者主要透過分析不同語言的文法、結構、文化和歷史等來解題。
            </p>
            <br />
            <p>
              據
              <Link
                href="https://ioling.org/#bansko-2023"
                className="text-cyan-700 hover:text-cyan-900"
              >
                國際語奧官方統計
              </Link>
              ，2023年於班斯科，保加利亞舉辦的第20屆國際語奧共有52隊，205名參賽者，分別來自38個不同國家。
            </p>
            <br />
            <p>
              競賽的題目內容，不需要擁有語言學方面的先備知識，也不需要通曉多國語言，只需透過邏輯推理與結構分析，並細心且耐心觀察，即可解開題目中的謎題。
            </p>
            <br />
            <p>
              國際語奧分為個人賽與團體賽。個人賽包含五道題目，涉及許多不同範圍，需在六小時內完成；團體賽則為一道連貫的大題，作答時間為三到四個小時。
            </p>
            <br />
            <p>
              參與國際語奧不僅能與來自各國的選手一同競爭，更能在為期約一週的時間內與各國好手交流、相互學習。台灣自2015年一名個人參賽學生摘下銅牌與一項最佳答案奬，2016年開始以台灣國手選拔賽選出國手並以國家代表隊團體參賽，至今每年均獲得佳績。
            </p>
          </div>
          <div className="basis-1/2 bg-cyan-100 p-10 m-5 shadow-md">
            <h2 className="text-2xl font-bold">台灣語奧主辦單位</h2>
            <br />
            <p>
              台灣語言學奧林匹亞（TOL）顧名思義是國際語言學奧林匹亞（IOL）在台灣的國手選拔及培訓。語言學奧林匹亞考驗語言的敏銳度、觀察力、統整能力，有時也涵蓋到各位的人文背景知識。參賽者在過程中，以提供的語言資料，整理出句法、語音、語意⋯⋯等規則，再發展出新的答案。
            </p>
            <br />
            <p>
              台灣語奧是由台大語言學研究所主辦，我們致力於語言科學人才的培訓及語言學推廣，尤其重視中學生的語言學入門。除了台灣語奧之外，也和國科會及台灣語言學學會舉辦中學生語言科學科展，另有結合程式語言、仿照語奧形式的語言黑客松讓大眾參加。
            </p>
            <br />
            <p>
              每年的2月所辦理的國手選拔賽是成為台灣IOL代表隊的重要管道，進入一階國手能參與亞太語奧及語言學探索營（規劃中），通過亞太語奧能成為正式國手，和其他國家選手一同進行聯合培訓，最後參加國際語言學奧林匹亞（IOL）到不同地區拓展國際文化視野，結交來自各地的好友。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
