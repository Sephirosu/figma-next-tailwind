import { MdKeyboardArrowLeft } from "react-icons/md";

type ButtonLeftProps = {
  scrollLeft: () => void;
};

const ButtonLeft: React.FC<ButtonLeftProps> = ({ scrollLeft }) => {
  return (
    <button
      className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
      onClick={scrollLeft}
    >
      <MdKeyboardArrowLeft size={20} onClick={scrollLeft} />
    </button>
  );
};

export default ButtonLeft;
