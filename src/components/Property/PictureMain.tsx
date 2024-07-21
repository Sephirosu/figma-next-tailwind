import Image from "next/image";

interface Picture {
  id: number;
  photo: string;
  width: number;
  height: number;
}

interface PictureMainProps {
  picture: Picture;
}

const PictureFlat: React.FC<PictureMainProps> = ({ picture }) => {
  return (
    <div>
      <Image
        src={picture.photo}
        alt={`Picture ${picture.id}`}
        width={picture.width}
        height={picture.height}
        className={`w-full`}
        priority
      />
    </div>
  );
};

export default PictureFlat;
