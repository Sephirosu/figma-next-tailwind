import LocationDynamic from "./LocationDynamic";
import RatingDynamic from "./RatingDynamic";
import AvailabilityDynamic from "./AvailabilityDynamic";
import { Apartments } from "@/types";

const StatsDynamic: React.FC<{ property: Apartments }> = ({ property }) => {
  return (
    <div className=" my-5 container">
      <div className="md:text-md lg:text-lg  flex flex-col xs:text-md ">
        <LocationDynamic property={property} />

        <AvailabilityDynamic property={property} />

        <RatingDynamic property={property} />
      </div>
    </div>
  );
};

export default StatsDynamic;
