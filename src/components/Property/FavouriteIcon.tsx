import { useState } from "react";
import Heart from "@icons/heart.svg";

const FavouriteIcon: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div>
      <Heart
        onClick={handleClick}
        className="absolute top-[15px] right-[15px] cursor-pointer hover:scale-105"
        style={{ fill: isLiked ? "red" : "gray" }}
      />
    </div>
  );
};

export default FavouriteIcon;
