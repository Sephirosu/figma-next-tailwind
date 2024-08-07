import CurrencyFormatter from "./CurrencyFormatter";

interface AvailablePriceProps {
  free: string;
  price: number;
}

const AvailablePrice: React.FC<AvailablePriceProps> = ({ free, price }) => {
  return (
    <>
      <div className="text-[12px] text-[#4c4c4c]">{free}</div>
      <div className="text-[12px]">
        <span className="mt-[5px] font-black">
          <CurrencyFormatter amount={price} />
        </span>
        <span className="text-[#4C4C4C] ml-1">night</span>
      </div>
    </>
  );
};

export default AvailablePrice;
