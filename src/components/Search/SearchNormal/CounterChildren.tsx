
import Counter from "./Counter";

interface CounterChildrenProps {
  child: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

const CounterChildren: React.FC<CounterChildrenProps> = ({
  child,
  setChildren,
  totalGuests,
  maxTotal,
}) => {
  const handleIncrement = () => {
    setChildren((prev) => (totalGuests < maxTotal ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Counter
      label="Children"
      description="Ages 2 - 12"
      value={child}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      maxTotal={maxTotal}
      totalGuests={totalGuests}
    />
  );
};

export default CounterChildren;
