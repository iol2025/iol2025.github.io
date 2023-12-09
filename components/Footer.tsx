import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full p-5 bg-yellow-600/60">
        <h2 className="text-center text-xl font-bold mb-2" id="contact">
          聯絡方式
        </h2>
        <div className="flex flex-row justify-center text-lg">
          <div className="mx-5 mb-5 w-1/3 p-2 pl-40">
            <p>台灣語言學奧林匹亞競賽</p>
            <p>(02) 3366 4104 #307</p>
            <p>ioltwtwiol@gmail.com</p>
          </div>
          <div className="w-1/3 p-2">
            <p>國立台灣大學語言學研究所教授 謝舒凱</p>
            <p>shukaihsieh@ntu.edu.tw</p>
          </div>
        </div>
        <p className="text-center">
          ©Taiwan Olympiad in Linguistics 2023 || Graduate Institute of
          Linguistics, National Taiwan University
        </p>
      </div>
    </>
  );
};

export default Footer;
