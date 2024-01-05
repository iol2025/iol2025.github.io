import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function about() {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40">
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">About</h1>
      </div>
      <div className="my-20 space-y-10">
        <FadeIn>
          <h2 className="text-2xl font-bold my-5">
            國際語言學奧林匹亞競賽簡介
          </h2>
          <div className="text-lg">
            <p className="my-2">
              &emsp;&emsp;國際語言學奧林匹亞競賽(The International Linguistics
              Olympiad,
              IOL)是屬於全球中學生的12項科學奧林匹亞競賽之一，自2003年開始，每年在不同國家輪流舉行。參賽者主要透過分析不同語言的文法、結構、文化和歷史等來解題。
            </p>
            <p className="my-2">
              &emsp;&emsp;據
              <Link
                href="https://ioling.org/#bansko-2023"
                className="text-cyan-700 hover:text-cyan-900"
              >
                國際語奧官方統計
              </Link>
              ，2023年於班斯科，保加利亞舉辦的第20屆國際語奧共有52隊，205名參賽者，分別來自38個不同國家。
            </p>
            <p className="my-2">
              &emsp;&emsp;競賽的題目內容，不需要擁有語言學方面的先備知識，也不需要通曉多國語言，只需透過邏輯推理與結構分析，並細心且耐心觀察，即可解開題目中的謎題。
            </p>
            <p className="my-2">
              &emsp;&emsp;國際語奧分為個人賽與團體賽。個人賽包含五道題目，涉及許多不同範圍，需在六小時內完成；團體賽則為一道連貫的大題，作答時間為三到四個小時。
            </p>
            <p className="my-2">
              &emsp;&emsp;參與國際語奧不僅能與來自各國的選手一同競爭，更能在為期約一週的時間內與各國好手交流、相互學習。台灣自2015年一名個人參賽學生摘下銅牌與一項最佳答案奬，2016年開始以台灣國手選拔賽選出國手並以國家代表隊團體參賽，至今每年均獲得佳績。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-2xl font-bold my-5">
            語言科學對人類社會之重要性
          </h2>
          <div className="text-lg">
            <p className="my-2">
              &emsp;&emsp;語言學是一門關於人類語言的科學研究，涉及的範疇包含但不限於對語言形式、語言含義和語境的分析以及神經心理、社會文化、自然語言處理、語言復健、語言教學與司法、傳播與社會科學、地理學等，完美結合了數理邏輯與人文知識，凡語言所到之處即有可研究的語言現象。國際語奧與其他學科奧賽非常不同，它不要求中學生具備語言學知識或學會多國語言，而是以世上現存的語言為主，提供少量但足以推理出該特定語言表達方式的資料，考驗參與者的邏輯推理與文化想像能力。藉此參與者得以理解與自己所處環境極不同的社會群體之世界觀與表達方式，拓展自己的思維與視野，甚至進一步理解多元共榮的意義。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-2xl font-bold my-5">
            台灣語言學奧林匹亞競賽簡史
          </h2>
          <div className="text-lg">
            <p className="my-2">
              &emsp;&emsp;每年台灣語奧由「台大語言學研究所」為主辦單位向教育部國教署申請年度經費，計畫名稱為「
              <b>國際語言奧林匹亞競賽-臺灣代表隊培育計畫</b>
              」，補助項目包含人事費用、語言學試題之研發、遴選及試務之執行、代表選手之培訓、報名亞太語奧與出國參加國際語奧等費用。
            </p>
            <p className="my-2">
              &emsp;&emsp;台灣自2016年起正式以國家代表隊身分參與國際語奧，每年由台大語言學研究所謝舒凱教授培訓與率領八位中學生出賽，屢獲佳績。直至2023年臺灣語奧已累計共二金、十一銀、九銅和十五面榮譽獎，目前亦有三名國手因二次獲獎榮登國際語奧名人堂，得獎名單詳見
              <Link
                href="https://ioling.org/results/TWN"
                className="text-cyan-700 hover:text-cyan-900"
              >
                國際語奧官網
              </Link>
              。
            </p>
            <p className="my-2">
              &emsp;&emsp;台灣語奧國手之組成來源多元，為數理、語言、人文社會之資優人才，其後續學業與職涯亦跨領域發展，涉足語言學、文學、醫學、數學、理化、資工、法政等多元學科，其中也不乏優秀學生前往英美、香港之大學就讀，如Massachusetts
              Institute of Technology、University College London、Brown
              University、Cornell University、Stanford University、University of
              Michigan、香港理工大學（The Hong Kong Polytechnic University）等。
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
