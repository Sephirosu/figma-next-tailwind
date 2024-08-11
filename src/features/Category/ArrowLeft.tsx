import Button from "@/app/components/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ArrowLeftProps } from "@/types";

const ButtonLeft: React.FC<ArrowLeftProps> = ({ scrollLeft }) => {
  return (
    <Button
      onClick={scrollLeft}
      className="left-0 z-2 absolute hidden md:block top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full border-2 p-[2px]"
    >
      <MdKeyboardArrowLeft size={20} />
    </Button>
  );
};

export default ButtonLeft;
