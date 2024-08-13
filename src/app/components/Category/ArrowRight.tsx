import Button from "@/app/components/Buttons/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ArrowRightProps } from "@/types";

const ButtonRight: React.FC<ArrowRightProps> = ({ scrollRight }) => {
  return (
    <Button
      onClick={scrollRight}
      className="right-0 z-2 absolute hidden md:block top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full border-2 p-[2px] "
    >
      <MdKeyboardArrowRight size={20} />
    </Button>
  );
};

export default ButtonRight;
