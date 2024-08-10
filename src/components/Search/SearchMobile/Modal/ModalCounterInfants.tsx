import ModalCounter from "./ModalCounter";
import { ModalCounterInfantsProps } from "@/types";

const ModalCounterInfants: React.FC<ModalCounterInfantsProps> = ({
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
    <ModalCounter
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

export default ModalCounterInfants;
