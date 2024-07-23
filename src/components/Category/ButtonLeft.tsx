import { MdKeyboardArrowLeft } from "react-icons/md";

type ButtonLeftProps = {
  scrollLeft: () => void;
};

const ButtonLeft: React.FC<ButtonLeftProps> = ({ scrollLeft }) => {
  return (
    <button
      className="absolute z-2 left-0 hidden md:block top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full border-2 p-[2px]"
      onClick={scrollLeft}
    >
      <MdKeyboardArrowLeft size={20} />
    </button>
  );
};

export default ButtonLeft;
