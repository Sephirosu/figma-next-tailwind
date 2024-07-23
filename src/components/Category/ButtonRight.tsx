import { MdKeyboardArrowRight } from "react-icons/md";

type ButtonRightProps = {
  scrollRight: () => void;
};

const ButtonRight: React.FC<ButtonRightProps> = ({ scrollRight }) => {
  return (
    <button
      className="absolute hidden md:block  right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full border-2 p-[2px] "
      onClick={scrollRight}
    >
      <MdKeyboardArrowRight size={20} />
    </button>
  );
};

export default ButtonRight;
