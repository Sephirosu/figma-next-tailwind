import DateModal from "./DateModal";
import { useState } from "react";

const ModalCheckout = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DateModal title="Check-out" date={startDate} setDate={setStartDate} />
  );
};

export default ModalCheckout;
