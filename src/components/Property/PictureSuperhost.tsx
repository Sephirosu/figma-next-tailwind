import Badge from "@icons/badge.svg";

interface PictureSuperhostProps {
  superhost: boolean;
}

const PictureSuperhost: React.FC<PictureSuperhostProps> = ({ superhost }) => {
  return (
    <>
      {superhost && (
        <div className="absolute top-[15px] ml-[15px] flex cursor-pointer hover:scale-105">
          <Badge
            className="relative"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};

export default PictureSuperhost;
