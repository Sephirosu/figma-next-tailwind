import { useState } from "react";

const Where: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col ml-[24px] border-r-[1px]">
      <div className="font-black text-left mt-3.5 text-xs ml-4">Where</div>
      <div className="relative">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search destinations"
          className="text-left mt-1 text-sm mb-3.5 ml-4 w-[141px] mr-[46px] outline-none"
        />
      </div>
    </div>
  );
};

export default Where;
