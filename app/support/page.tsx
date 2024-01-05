import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function support() {
  return (
    <>
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">Support Us</h1>
      </div>
      <div className="mb-20">
        <h1 className="text-center text-4xl font-bold my-5">捐款資訊</h1>
        <FadeIn>
          <div className="border-2 p-8 w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-5 text-lg leading-8 shadow-md">
            <h2 className="text-2xl font-bold text-center">個人捐款</h2>
            <br />
            <p>
              <b>銀行代號：</b>808
            </p>
            <p>
              <b>銀行：</b>玉山銀行 台大分行
            </p>
            <p>
              <b>帳號：</b>0624 940 151025
            </p>
            <p>
              <b>戶名：</b>台灣語言文化與資訊協會
            </p>
            <ul className="text-base">
              <li>&emsp;若有備註欄請註明「捐款語奧活動」。</li>
              <li>
                &emsp;若需開立收據請於匯款後填寫表單：
                <Link
                  href="https://forms.gle/Qt8U5JuiPYQ3bUhJ8"
                  className="text-cyan-700 hover:text-cyan-900"
                  target="_blank"
                >
                  【表單連結】
                </Link>
              </li>
            </ul>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="border-2 p-8 w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-5 text-lg leading-8 shadow-md">
            <h2 className="text-2xl font-bold text-center">其他資訊</h2>
            <br />
            <p>
              歡迎參考計畫書：
              <Link
                href="/pdf/program.pdf"
                className="text-cyan-700 hover:text-cyan-900"
                target="_blank"
              >
                【計畫書連結】
              </Link>
            </p>
            <p>
              或透過以下
              <Link
                href="#contact"
                className="text-cyan-700 hover:text-cyan-900"
              >
                聯絡方式
              </Link>
              聯絡我們。
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
