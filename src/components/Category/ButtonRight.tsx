import { MdKeyboardArrowRight } from "react-icons/md";

type ButtonRightProps = {
  scrollRight: () => void;
};

const ButtonRight: React.FC<ButtonRightProps> = ({ scrollRight }) => {
  return (
    <button
      className="absolute right-0 z-10  top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
      onClick={scrollRight}
    >
      <MdKeyboardArrowRight size={20} />
    </button>
  );
};

export default ButtonRight;
