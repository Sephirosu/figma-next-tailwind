import Image from "next/image";

interface Picture {
  id: number;
  photo: string;
  width: number;
  height: number;
  superhost: boolean;
}

interface PictureSuperhostProps {
  picture: Picture;
}

const PictureSuperhost: React.FC<PictureSuperhostProps> = ({ picture }) => {
  return (
    <>
      {picture.superhost && (
        <div className="absolute top-[15px] ml-[15px] flex cursor-pointer hover:scale-105">
          <Image
            src="/icons/badge.svg"
            alt="Superhost Badge"
            width={84}
            height={24}
            className="relative"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};

export default PictureSuperhost;
