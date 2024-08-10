import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import Button from "@/app/Button";
import { CounterProps } from "@/types";

const Counter: React.FC<CounterProps> = ({
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
        <SlMinus className="w-6 h-6" />
      </Button>
      <span className="font-lighter">{value}</span>
      {value < maxTotal && totalGuests < maxTotal && (
        <Button
          onClick={onIncrement}
          className="border rounded-full mx-2 text-gray-600"
        >
          <BsPlusCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  </div>
);

export default Counter;
