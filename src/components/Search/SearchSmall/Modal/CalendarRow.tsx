import { useState } from "react";

export interface CalendarRowProps {
  firstDay: number;
  lastDayInMonth: number;
  row: number;
  currentMonth: number;
  currentYear: number;
  setStartDate: (date: Date) => void;
  closeModal: () => void;
}

const CalendarRow: React.FC<CalendarRowProps> = ({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
  setStartDate,
  closeModal,
}) => {
  const activeDay = useState(new Date().getDate())[0];

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
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
        className="relative py-3 px-2 md:px-3 hover:text-gray-200 text-center text-black cursor-pointer"
        onClick={() => handleDateClick(1)}
      >
        1
      </td>
    );
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <td
          key={i + 1}
          className="relative py-3 px-2 md:px-3 hover:scale-105 text-center text-black cursor-pointer"
          onClick={() => handleDateClick(i + 1)}
        >
          {activeDay === i + 1 &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <span className="p-1 rounded-full border-black border-2">
              {i + 1}
            </span>
          ) : (
            i + 1
          )}
        </td>
      );
    }

    return <>{content}</>;
  }

  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        <td
          key={i + (7 * row - firstDay)}
          className="relative py-3 px-2 md:px-3 hover:scale-105 text-center text-black cursor-pointer"
          onClick={() => handleDateClick(i + (7 * row - firstDay))}
        >
          {activeDay === i + (7 * row - firstDay) &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <span className="p-1 rounded-full border-black border-2">
              {i + (7 * row - firstDay)}
            </span>
          ) : (
            i + (7 * row - firstDay)
          )}
        </td>
      );
    }
  }
  return <>{content}</>;
};

export default CalendarRow;
