import React from "react";
import Counter from "./Counter";

interface CounterAdultsProps {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

const CounterAdults: React.FC<CounterAdultsProps> = ({
  adults,
  setAdults,
  totalGuests,
  maxTotal,
}) => {
  const handleIncrement = () => {
    setAdults((prev) => (totalGuests < maxTotal ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setAdults((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Counter
      label="Adults"
      description="Ages 13 or above"
      value={adults}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      maxTotal={maxTotal}
      totalGuests={totalGuests}
    />
  );
};

export default CounterAdults;
