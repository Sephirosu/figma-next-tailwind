import { useEffect, useRef, useState } from "react";
import CalendarRow from "./CalendarRow";

export interface CalendarProps {
  setStartDate: (date: Date) => void;
  closeModal: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ setStartDate, closeModal }) => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeMonthString, setActiveMonthString] = useState(
    new Date().toDateString().split(" ")[1]
  );
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const prevMonth = useRef<number>(new Date().getMonth());
  const [firstDayInMonth, setFirstDayInMonth] = useState<number[]>([]);
  const minDate = new Date();

  useEffect(() => {
    let x = [];
    for (let i = 1; i <= 12; i++) {
      x.push(new Date(`${activeYear}/${i}/1`).getDay());
    }
    setFirstDayInMonth(x);
  }, [activeYear]);

  useEffect(() => {
    setActiveMonthString(
      new Date(new Date().setMonth(activeMonth)).toDateString().split(" ")[1]
    );

    prevMonth.current = activeMonth;
  }, [activeMonth]);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center p-4 bg-gray-100 z-50 cursor-pointer">
      <div className="w-full max-w-md md:shadow-lg md:rounded bg-gray-100">
        <div className="w-full rounded">
          <div className="flex items-center justify-between mb-4 p-4">
            <div className="text-left font-bold text-xl text-black">
              {`${activeMonthString} ${activeYear}`}
            </div>
            <div className="flex space-x-4">
              <button
                className="p-2 rounded text-black"
                onClick={() => {
                  if (prevMonth.current === 0) {
                    setActiveYear(activeYear - 1);
                    setActiveMonth(11);
                  } else {
                    setActiveMonth(activeMonth - 1);
                  }
                }}
              >
                <svg
                  width={15}
                  height={15}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                  ></path>
                </svg>
              </button>
              <button
                className="p-2 rounded text-black"
                onClick={() => {
                  if (prevMonth.current === 11) {
                    setActiveYear(activeYear + 1);
                    setActiveMonth(0);
                  } else {
                    setActiveMonth(activeMonth + 1);
                  }
                }}
              >
                <svg
                  width={15}
                  height={15}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-2">
            <table className="w-full text-black">
              <thead>
                <tr>
                  <th className="py-3 px-2 md:px-3">S</th>
                  <th className="py-3 px-2 md:px-3">M</th>
                  <th className="py-3 px-2 md:px-3">T</th>
                  <th className="py-3 px-2 md:px-3">W</th>
                  <th className="py-3 px-2 md:px-3">T</th>
                  <th className="py-3 px-2 md:px-3">F</th>
                  <th className="py-3 px-2 md:px-3">S</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i}>
                    <CalendarRow
                      firstDay={firstDayInMonth[activeMonth]}
                      lastDayInMonth={new Date(
                        activeYear,
                        activeMonth + 1,
                        0
                      ).getDate()}
                      row={i}
                      currentMonth={activeMonth}
                      currentYear={activeYear}
                      setStartDate={setStartDate}
                      closeModal={closeModal}
                      minDate={minDate}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
