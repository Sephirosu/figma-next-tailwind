import { CiSaveUp2 } from "react-icons/ci";
import Heart from "@icons/heart.svg";
import { useState } from "react";
import { ApartmentNameProps } from "@/types";

const ApartmentName: React.FC<ApartmentNameProps> = ({ property }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="flex justify-between my-3">
      <div className="font-poppins font-semibold oneplus:text-lg text-base">
        {property.aptname}
      </div>
      <div className="flex text-sm font-medium">
        <div className="flex gap-2 cursor-pointer">
          <span className="mt-1 select-none  text-base">
            <CiSaveUp2 />
          </span>

          <span className="underline mr-1 hidden oneplus:block">Share</span>
          <span className="mt-0 select-none">
            <Heart
              style={{ fill: isLiked ? "red" : "gray" }} // dok ne skontamo kako cemo dalje
              onClick={handleClick}
            />
          </span>
          <span className="hidden oneplus:block">Save</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentName;
