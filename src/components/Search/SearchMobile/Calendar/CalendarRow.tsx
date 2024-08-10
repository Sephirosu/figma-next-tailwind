import { useState } from "react";
import { isBefore } from "date-fns";
import { CalendarRowProps } from "@/types";

const CalendarRow: React.FC<CalendarRowProps> = ({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
  setStartDate,
  closeModal,
  minDate,
}) => {
  const activeDay = useState(new Date().getDate())[0];

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (isBefore(selectedDate, minDate)) return;
    setStartDate(selectedDate);
    closeModal();
  };

  let content = [];

  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td key={`empty-${i}`}></td>);
    }
    content.push(
      <td
        key={1}
        className={`relative py-3 px-2 md:px-3 text-center text-black cursor-pointer ${
          isBefore(new Date(currentYear, currentMonth, 1), minDate)
            ? "text-gray-400 cursor-not-allowed"
            : ""
        }`}
        onClick={() => handleDateClick(1)}
      >
        1
      </td>
    );
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      const date = i + 1;
      content.push(
        <td
          key={date}
          className={`relative py-3 px-2 md:px-3 text-center text-black cursor-pointer ${
            isBefore(new Date(currentYear, currentMonth, date), minDate)
              ? "text-gray-400 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {activeDay === date &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <span className="p-1 rounded-full border-black border-2">
              {date}
            </span>
          ) : (
            date
          )}
        </td>
      );
    }

    return <>{content}</>;
  }

  for (let i = 1; i <= 7; i++) {
    const date = i + (7 * row - firstDay);
    if (date <= lastDayInMonth) {
      content.push(
        <td
          key={date}
          className={`relative py-3 px-2 md:px-3 text-center text-black cursor-pointer ${
            isBefore(new Date(currentYear, currentMonth, date), minDate)
              ? "text-gray-400 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {activeDay === date &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <span className="p-1 rounded-full border-black border-2">
              {date}
            </span>
          ) : (
            date
          )}
        </td>
      );
    }
  }
  return <>{content}</>;
};

export default CalendarRow;
