import { SlMinus } from "react-icons/sl";
import { BsPlusCircle } from "react-icons/bs";
import Button from "@/app/components/Buttons/Button";
import { ModalCounterProps } from "@/types";

const ModalCounter: React.FC<ModalCounterProps> = ({
  label,
  description,
  value,
  onIncrement,
  onDecrement,
  maxTotal,
  totalGuests,
}) => (
  <div className="flex justify-between mt-4">
    <div>
      <div className="text-lg font-bolder">{label}</div>
      <span className="text-sm text-gray-400">{description}</span>
    </div>
    <div className="flex items-center">
      <Button
        onClick={onDecrement}
        className="border rounded-full mx-2 text-gray-600"
      >
        <SlMinus className="w-8 h-8" />
      </Button>
      <span className="font-lighter">{value}</span>
      {value < maxTotal && totalGuests < maxTotal && (
        <Button
          onClick={onIncrement}
          className="border rounded-full mx-2 text-gray-600"
        >
          <BsPlusCircle className="w-8 h-8" />
        </Button>
      )}
    </div>
  </div>
);

export default ModalCounter;
