import { Apartments } from "@/types";

const OwnerStats: React.FC<{ property: Apartments }> = ({ property }) => {
  return (
    <>
      <div className="flex justify-between items-center mt-2 ">
        <div className="text-3xl xs:text-2xl text-gray-700 font-medium tracking-wide">
          {property.owner}
        </div>
      </div>
      <div className="mb-4 text-bolder text-gray-700">
        Stay with {property.hobby}
      </div>
    </>
  );
};

export default OwnerStats;
