import Group from "@icons/group.svg";

interface PictureMultiProps {
  multi?: boolean;
}

const PictureMulti: React.FC<PictureMultiProps> = ({ multi }) => {
  return (
    <>
      {multi && (
        <div className="relative flex items-center justify-center">
          <Group
            className="absolute bottom-[9px] cursor-pointer hover:scale-105 "
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};

export default PictureMulti;
