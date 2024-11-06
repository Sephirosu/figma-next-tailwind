import Button from "@/app/components/Buttons/Button";
import Image from "next/image";
import { AccesibilityFeatureProps } from "@/types";

const AccesibilityFeature: React.FC<AccesibilityFeatureProps> = ({
  property,
}) => {
  const parkingAvailable = property.amenities?.["Free parking on premises"];

  if (!parkingAvailable) {
    return null;
  }

  return (
    <div className="border-b py-4">
      <div className="text-md sm:text-lg font-bold">Accessibility Feature</div>
      <p className="text-sm sm:text-base text-gray-600">
        This info was provided by the Host and reviewed by Airbnb.
      </p>
      <div className="my-2 rounded-lg overflow-hidden relative gagi:w-[300px] gagi:h-[200px] w-[200px] h-[150px]">
        <Image
          src="/others/parkingplace.jpeg"
          alt="Parking place"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-sm sm:text-base font-bold">
        Guest entrance and parking
      </p>
      <p className="text-sm sm:text-base">Accessible parking spot</p>
      <div className="border inline-block mt-3 p-3 text-sm sm:text-base font-bold border-black rounded-lg">
        <Button onClick={() => alert("temporary unavailable")}>
          Show all feature details
        </Button>
      </div>
    </div>
  );
};

export default AccesibilityFeature;
