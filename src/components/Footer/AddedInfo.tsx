import { TfiWorld } from "react-icons/tfi";
import { FaArrowUp } from "react-icons/fa";

const AddedInfo: React.FC = () => {
  return (
    <div>
      <ul className="flex font-semibold space-x-1 mt-2.5 xxs:hidden xs:hidden sm:flex cursor-pointer">
        <li>
          <TfiWorld width={12} height={12} className="mt-[3px]" />
        </li>
        <li>English(IN)</li>
        <li>INR</li>
        <li>Support & resources</li>
        <li>
          <FaArrowUp width={11} height={11} />
        </li>
      </ul>
    </div>
  );
};

export default AddedInfo;
