import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "@/utils/FormatDate";
import { DatePickerCalendarProps } from "@/types";
import { IMaskInput } from "react-imask";

const DatePickerCalendar: React.FC<DatePickerCalendarProps> = ({
  placeholder,
  dateFormat = "MM/dd/yyyy",
  className = "text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 ml-2 outline-none",
  onChange,
  selectedDate = null,
  minDate = new Date(),
  maxDate,
  startDate,
  endDate,
  showTimeSelect = false,
  timeFormat = "HH:mm",
  timeIntervals = 30,
  isClearable = false,
}) => {
  const [date, setDate] = useState<Date | [Date, Date] | null>(
    selectedDate ? new Date(selectedDate) : null
  );

  const handleDateChange = (date: Date | [Date, Date] | null) => {
    setDate(date);
    if (onChange) {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (Array.isArray(date)) {
        const formattedDates = date.map((d) =>
          d ? formatDate(d, userTimeZone) : null
        );
        onChange(formattedDates);
      } else {
        onChange(date ? formatDate(date, userTimeZone) : null);
      }
    }
  };

  return (
    <DatePicker
      selected={Array.isArray(date) ? date[0] : date || undefined}
      onChange={handleDateChange}
      placeholderText={placeholder}
      className={className}
      dateFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      startDate={startDate}
      endDate={endDate}
      showTimeSelect={showTimeSelect}
      timeFormat={timeFormat}
      timeIntervals={timeIntervals}
      isClearable={isClearable}
      customInput={
        <IMaskInput
          mask="00/00/00"
          unmask={true}
          placeholder={placeholder}
          className="text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 ml-2 outline-none"
        />
      }
    />
  );
};

export default DatePickerCalendar;
