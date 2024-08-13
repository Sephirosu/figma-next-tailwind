import DateModal from "./DateModal";
import { useState } from "react";

const ModalCheckin = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return <DateModal title="Check-in" date={startDate} setDate={setStartDate} />;
};

export default ModalCheckin;
