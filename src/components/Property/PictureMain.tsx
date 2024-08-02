import Image from "next/image";

interface PictureMainProps {
  id: number;
  photo: string;
  width: number;
  height: number;
}

const PictureFlat: React.FC<PictureMainProps> = ({
  photo,
  width,
  id,
  height,
}) => {
  return (
    <div>
      <Image
        src={photo}
        alt={`Picture ${id}`}
        width={width}
        height={height}
        className={`w-full cursor-pointer`}
        priority
      />
    </div>
  );
};

export default PictureFlat;
