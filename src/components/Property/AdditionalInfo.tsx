import { FaStar } from "react-icons/fa";

interface Picture {
  location: string;
}

interface AdditionalInfoProps {
  picture: Picture;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ picture }) => {
  return (
    <div className="text-[13px] mt-[15px]">
      <div className="flex justify-between">
        <div>{picture.location}</div>
        <ul className="flex items-center gap-1">
          <li>
            <FaStar width={15} height={15} className="mb-1" />
          </li>
          <li>4.91</li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
