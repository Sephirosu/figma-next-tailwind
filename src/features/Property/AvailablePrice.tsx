import { CurrencyFormatter } from "@/utils";
import { AvailablePriceProps } from "@/types";
import formatDateRange from "@/utils/FormatDateRange";

const AvailablePrice: React.FC<AvailablePriceProps> = ({
  availability,
  price,
}) => {
  const formattedDateRange = formatDateRange(
    availability.start,
    availability.end
  );

  return (
    <>
      <div className="text-[12px] text-[#4c4c4c]">{formattedDateRange}</div>
      <div className="text-[12px]">
        <span className="mt-[5px] font-black">
          <CurrencyFormatter amount={price} currency="USD" />
        </span>
        <span className="text-[#4C4C4C] ml-1">night</span>
      </div>
    </>
  );
};

export default AvailablePrice;
