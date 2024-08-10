import { OwnerInfoProps } from "@/types";

const OwnerInfo: React.FC<OwnerInfoProps> = ({ owner, hobby }) => {
  return (
    <div className="text-[12px] text-[#4C4C4c] align-left list-disc">
      <ul className="flex gap-2">
        <li>Stay with {owner}</li>
        <li>{hobby}</li>
      </ul>
    </div>
  );
};

export default OwnerInfo;
