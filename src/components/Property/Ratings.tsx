import { FaStar } from "react-icons/fa";
import { RatingsProps } from "@/types";

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  return (
    <>
      <li>
        <FaStar width={15} height={15} className="mb-[1px]" />
      </li>
      <li>{rating}</li>
    </>
  );
};

export default Ratings;
