export default function about() {
  return (
    <>
      <div className="my-20">
        <h1 className="text-center text-6xl font-bold my-5">About</h1>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold my-5">組織委員會成員</h1>
        <div className="border-2 p-5 m-5 shadow-md">
          <h2 className="text-2xl font-bold leading-10">公關組</h2>
          <h3 className="text-xl leading-10">組長</h3>
          <ul>
            <li className="text-lg">蔡碧玲 Rebecca Tsai</li>
          </ul>
          <h3 className="text-xl leading-10">成員</h3>
          <ul>
            <li className="text-lg">王薇森 WANG, WEI-SEN</li>
          </ul>
        </div>
      </div>
    </>
  );
}
