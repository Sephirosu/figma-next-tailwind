const CheckIn = () => {
  return (
    <div className="flex flex-col ml-4 border-r-[1px]  ">
      <div className="font-black text-left text-xs  mt-3.5 ml-2">Check-in</div>
      <input
        placeholder="Add dates"
        className="text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 ml-2 outline-none"
      />
    </div>
  );
};

export default CheckIn;
