import Image from "next/image";
import Link from "next/link";
import background from "../assets/banner.png";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <div className="bg-amber-50 py-10">
        <div className="mx-10 sm:mx-20 lg:mx-40">
          <div className="text-center text-lg">Coming Soon</div>
        </div>
      </div>
      {/* <div className="relative">
        <Image
          src={background}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="bg-amber-50 py-10">
        <div className="mx-10 sm:mx-20 lg:mx-40">
          <div className="text-center text-2xl font-bold pt-10">
            <div className="pb-5">
              Before Contest
            </div>
            <div className="pb-5">
              {(() => {
                const today = new Date();
                const contestDay = new Date(Date.UTC(2025, 7, 1));
                const diffHours = Math.floor((contestDay.getTime() - today.getTime()) / (1000 * 60 * 60));
                return contestDay > today ? <>
                  <span className="px-3 text-8xl">{Math.floor(diffHours / 24)}</span>
                  <span className="px-3 ">days</span>
                  <span className="px-3 text-8xl">{diffHours % 24}</span>
                  <span className="px-3 ">hours</span>
                </> : <></>
              })()}
            </div>
          </div>

          <FadeIn>
            <h1 className="text-center text-4xl font-bold pt-20">簡介</h1>
            <div className=" text-lg pb-5">
              <h2 className="text-2xl font-bold my-5">
                國際語言學奧林匹亞競賽
              </h2>
              <p>
                &emsp;&emsp;國際語言學奧林匹亞競賽（以下簡稱國際語奧）是開放全世界中學生參與的十二項國際科學奧林匹亞競賽之一。自2003年起，國際語奧每年在不同國家舉辦，迄今已有超過五十個國家參與此項競賽，成為國際語言學教育與人才培育的一項重要的活動盛事。台灣爭取到主辦2025年第二十二屆國際語奧之資格，乃向社會大眾推廣語言學、向國際社會展現臺灣語言文化價值之重要機會。
              </p>
              <div className="w-40 mx-auto my-2">
                <Link href="/about">
                  <p className="text-lg text-center font-bold py-2 hover:text-amber-700">
                    了解更多
                  </p>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <h1 className="text-center text-4xl font-bold pt-20">贊助資訊</h1>
            <div className=" text-lg pb-5">
              <h2 className="text-2xl font-bold my-5">贊助方式</h2>
              <p>
                &emsp;&emsp;贊助方式包含實物贊助與捐款贊助兩種模式，詳細資訊與回饋歡迎參考計畫書：
                <Link
                  href="/pdf/program.pdf"
                  className="text-cyan-700 hover:text-cyan-900"
                  target="_blank"
                >
                  【計畫書連結】
                </Link>
                ，或透過以下
                <Link
                  href="#contact"
                  className="text-cyan-700 hover:text-cyan-900"
                >
                  聯絡方式
                </Link>
                聯絡我們。
              </p>
              <div className="w-40 mx-auto my-2">
                <Link href="/support">
                  <p className="text-lg text-center font-bold py-2 hover:text-amber-700">
                    了解更多
                  </p>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div> */}
    </>
  );
}
