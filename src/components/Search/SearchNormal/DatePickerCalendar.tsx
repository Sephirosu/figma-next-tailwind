import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const minDate = new Date();
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        placeholderText="Add dates"
        className="text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 ml-2 outline-none"
        dateFormat="dd-MM-yy"
        onKeyDown={(e) => e.preventDefault()}
        minDate={minDate}
      />
    </>
  );
};

export default DatePickerCalendar;
