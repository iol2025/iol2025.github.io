import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import LTTC from "@/assets/LTTC.jpg";

export default function sponsor() {
  return (
    <>
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">Sponsors</h1>
      </div>
      <div>
        <div className="mx-40 my-10">
          <h1 className="text-center text-4xl font-bold my-5">贊助單位</h1>
          <div className="flex flex-row">
            <Card name="財團法人語言訓練測驗中心" image={LTTC} width={400} />
          </div>
        </div>
      </div>
    </>
  );
}
