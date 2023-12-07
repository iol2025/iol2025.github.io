import React from "react";
import Image, { StaticImageData } from "next/image";

type cardProps = {
  name: string;
  image: StaticImageData;
  height?: number;
  width?: number;
};

const Card = ({ name, image, height, width }: cardProps) => {
  return (
    <div className="flex flex-col border-2 p-5 mx-5 my-5 shadow-md w-full items-center">
      <div>
        <h1 className="text-xl font-bold mb-5">{name}</h1>
      </div>
      <div className="m-auto">
        <Image src={image} alt={name} height={height} width={width} />
      </div>
    </div>
  );
};

export default Card;
