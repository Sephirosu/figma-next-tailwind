import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const ModalWhere: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <div className="text-xl font-semibold mb-3">Where to?</div>
      <div className="border flex h-14 bg-white mr-10">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <div className="relative flex-1 flex items-center">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search destinations"
            className="ml-6 h-full rounded outline-none w-full"
            style={{ minWidth: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default ModalWhere;
