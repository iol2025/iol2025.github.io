import Card from "@/components/Card";
import LTTC from "@/assets/LTTC.jpg";

export default function sponsor() {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40">
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">Sponsors</h1>
      </div>
      <div>
        <div className=" my-10">
          <h1 className="text-center text-4xl font-bold my-5">贊助單位</h1>
          <div className="flex flex-row">
            <Card name="財團法人語言訓練測驗中心" image={LTTC} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
