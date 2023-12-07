import Image from "next/image";
import Link from "next/link";
import background from "../assets/banner.png";

export default function Home() {
  return (
    <>
      <div className="relative mt-12">
        <Image
          src={background}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* <div className="m-auto text-amber-50 text-center font-bold">
        <h1 className="my-2 text-6xl">IOL 2025 Taipei, Taiwan</h1>
        <h2 className="text-2xl">
          台灣將於2025年首次主辦國際語言學奧林匹亞競賽
        </h2>
      </div> */}
      <div className="bg-amber-50">
        <h1 className="text-center text-4xl font-bold pt-10">簡介</h1>
        <div className="mx-40 text-lg pb-5">
          <h2 className="text-2xl font-bold my-5">國際語言學奧林匹亞競賽</h2>
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
      </div>
    </>
  );
}
