interface Picture {
  free: string;
  price: number;
}

interface AvailablePriceProps {
  picture: Picture;
}

const AvailablePrice: React.FC<AvailablePriceProps> = ({ picture }) => {
  return (
    <>
      <div className="text-[12px] text-[#4c4c4c]">{picture.free}</div>
      <div className="text-[12px]">
        <span className="mt-[5px] font-black">$</span>
        <span className="font-black">{picture.price}</span>
        <span className="text-[#4C4C4C] ml-1">night</span>
      </div>
    </>
  );
};

export default AvailablePrice;
