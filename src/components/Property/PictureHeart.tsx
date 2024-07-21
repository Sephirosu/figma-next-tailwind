import Image from "next/image";
import React from "react";

interface Picture {
  id: number;
  photo: string;
  width: number;
  height: number;
}

interface PictureHeartProps {
  picture: Picture;
}

const PictureHeart: React.FC<PictureHeartProps> = ({ picture }) => {
  return (
    <div>
      <Image
        src="/icons/heart.svg"
        width={23}
        height={23}
        className="absolute top-[15px] right-[15px]"
        alt="heart icon"
      />
    </div>
  );
};

export default PictureHeart;
