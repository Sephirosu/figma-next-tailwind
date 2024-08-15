import { FaStar } from "react-icons/fa";
import { Apartments } from "@/types";

const RatingDynamic: React.FC<{property:Apartments}> = ({ property }) => {
  return (
    <div className="flex ">
      <span className="font-bold mr-1">Rating:</span>
      <span className="text-gray-700">{property.rating}</span>

      <span className="ml-1">
        <FaStar className="mt-1" />
      </span>
    </div>
  );
};

export default RatingDynamic;
