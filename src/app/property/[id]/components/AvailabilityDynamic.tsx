import { Apartments } from "@/types";
import formatDateRange from "@/utils/FormatDateRange";

const AvailabilityDynamic: React.FC<{ property: Apartments }> = ({
  property,
}) => {
  return (
    <div>
      <span className="font-bold mr-1">Available:</span>
      <span className="text-gray-700">
        {formatDateRange(
          property.availability.start,
          property.availability.end
        )}
      </span>
    </div>
  );
};

export default AvailabilityDynamic;
