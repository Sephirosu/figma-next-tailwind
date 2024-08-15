import { Apartments } from "@/types";

const LocationDynamic: React.FC<{ property: Apartments }> = ({ property }) => {
  return (
    <div>
      <span className="font-bold mr-1">Location: </span>
      <span className="text-gray-700">{property.location}</span>
    </div>
  );
};

export default LocationDynamic;
