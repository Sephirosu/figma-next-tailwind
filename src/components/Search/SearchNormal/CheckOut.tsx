const CheckOut = () => {
  return (
    <div className="flex flex-col ml-[24px] border-r-[1px]">
      <div className="font-black text-left text-xs mt-3.5 mr-8 ">Check-out</div>
      <input
        placeholder="Add dates"
        className="text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 outline-none"
      />
    </div>
  );
};

export default CheckOut;
