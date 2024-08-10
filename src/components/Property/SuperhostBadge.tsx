import Badge from "@icons/badge.svg";
import { SuperhostBadgeProps } from "@/types";

const SuperhostBadge: React.FC<SuperhostBadgeProps> = ({ superhost }) => {
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

export default SuperhostBadge;
