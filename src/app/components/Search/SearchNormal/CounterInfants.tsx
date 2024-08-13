import Counter from "./Counter";
import { CounterInfantsProps } from "@/types";

const CounterInfants: React.FC<CounterInfantsProps> = ({
  infants,
  setInfants,
  totalGuests,
  maxTotal,
}) => {
  const handleIncrement = () => {
    setInfants((prev) => (totalGuests < maxTotal ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setInfants((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Counter
      label="Infants"
      description="Under 2"
      value={infants}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      maxTotal={maxTotal}
      totalGuests={totalGuests}
    />
  );
};

export default CounterInfants;
