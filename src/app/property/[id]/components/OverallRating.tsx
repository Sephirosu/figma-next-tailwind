import Image from "next/image";
import { OverallRatingProps } from "@/types";

const OverallRating: React.FC<OverallRatingProps> = ({ property }) => {
  return (
    <div className="items-center justify-center flex flex-col mt-4">
      <div className="flex ">
        <Image
          src="/icons/favouriteguestleft.svg"
          width={60}
          height={60}
          alt="Left Favourite Icon"
        />
        <span className="smxs:text-[90px] text-[65px]">{property.rating}</span>
        <Image
          src="/icons/favouriteguestright.svg"
          width={60}
          height={60}
          alt="Right Favourite Icon"
        />
      </div>
      <div className="text-3xl">Guest favorite</div>
      <div className="text-base md:text-lg text-gray-600 text-center">
        One of the most loved homes on Airbnb based on ratings, reviews, and
        reliability
      </div>
    </div>
  );
};

export default OverallRating;
