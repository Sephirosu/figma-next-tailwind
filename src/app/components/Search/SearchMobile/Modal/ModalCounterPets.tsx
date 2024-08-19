import ModalCounter from "./ModalCounter";
import { ModalCounterPetsProps } from "@/types";

const ModalCounterPets: React.FC<ModalCounterPetsProps> = ({
  pets,
  setPets,
  totalGuests,
  maxTotal,
}) => {
  const handleIncrement = () => {
    setPets((prev) => (totalGuests < maxTotal ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setPets((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <ModalCounter
      label="Pets"
      description="Bringing a service animal?"
      value={pets}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      maxTotal={maxTotal}
      totalGuests={totalGuests}
    />
  );
};

export default ModalCounterPets;