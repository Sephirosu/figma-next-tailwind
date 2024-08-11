import { useState } from "react";
import WhoOpen from "./WhoOpen";

const Who = () => {
  const [whoOpen, setWhoOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const openWho = () => {
    setWhoOpen(true);
  };

  const closeWho = () => {
    setWhoOpen(false);
  };

  return (
    <div className="flex flex-col ml-[24px]">
      <div className="font-black text-left text-xs mt-3.5">Who</div>
      <button onClick={openWho}>
        <input
          placeholder="Add guests"
          value={total ? `Guests: ${total}` : ""}
          className="text-left mt-1 text-sm mb-3.5 w-[79px] mr-[106px] outline-none"
          readOnly
          max={15}
        />
      </button>
      {whoOpen && <WhoOpen closeWho={closeWho} setTotal={setTotal} />}
    </div>
  );
};

export default Who;
