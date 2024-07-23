import Image from "next/image";

interface Picture {
  id: number;
  photo: string;
  width: number;
  height: number;
  multi?: boolean;
}

interface PictureMultiProps {
  picture: Picture;
}

const PictureMulti: React.FC<PictureMultiProps> = ({ picture }) => {
  return (
    <>
      {picture.multi && (
        <div className="relative flex items-center justify-center">
          <Image
            src="/icons/group.svg"
            alt="Group Icon"
            width={47}
            height={6}
            className="absolute bottom-[9px] cursor-pointer hover:scale-105 "
          />
        </div>
      )}
    </>
  );
};

export default PictureMulti;
