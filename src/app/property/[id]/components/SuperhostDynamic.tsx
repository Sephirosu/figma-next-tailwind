import { Apartments } from "@/types";

const SuperhostDynamic: React.FC<{ property: Apartments }> = ({ property }) => {
  return (
    <>
      {property.superhost === true && (
        <div className="text-sm text-white bg-red-500 rounded-full px-2 py-1 inline-block mt-3 mb-1">
          Superhost
        </div>
      )}
    </>
  );
};

export default SuperhostDynamic;
