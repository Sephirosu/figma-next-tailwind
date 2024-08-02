import Ratings from "./Ratings";

interface AdditionalInfoProps {
  location: string;
  rating: number;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  location,
  rating,
}) => {
  return (
    <div className="text-[13px] mt-[15px]">
      <div className="flex justify-between">
        <div>{location}</div>
        <ul className="flex items-center gap-1 cursor-pointer">
          <Ratings rating={rating} />
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
