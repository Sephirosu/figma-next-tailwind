import { useState, useEffect } from "react";
import { Calendar } from "@/app/components/Search/SearchMobile/Calendar";
import formatDateRange from "@/utils/FormatDateRangeModal";
import { FaStar } from "react-icons/fa";
import Button from "@/app/components/Buttons/Button";
import { ScheduleUnderLgProps } from "@/types";
import useResizeHandler from "@/app/hooks/useSizeHandler";

const ScheduleUnderLg: React.FC<ScheduleUnderLgProps> = ({ property }) => {
  const [calendarOpen, setCalendarOpen] = useState<
    "check-in" | "check-out" | null
  >(null);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    if (calendarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [calendarOpen]);

  const handleOpenCalendar = (type: "check-in" | "check-out") => {
    setCalendarOpen(type);
  };

  const handleCloseModal = () => {
    setCalendarOpen(null);
  };

  const handleDateSelected = (type: "check-in" | "check-out", date: Date) => {
    if (type === "check-in") {
      setCheckInDate(date);
      handleOpenCalendar("check-out");
      setErrorMessage(null);
    } else {
      if (checkInDate && date <= checkInDate) {
        setErrorMessage("Check-out date must be after check-in date.");
        return;
      }
      setCheckOutDate(date);
      handleCloseModal();
      setErrorMessage(null);
    }
  };

  const handleClearAll = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setErrorMessage(null);
  };

  const handleReserve = () => {
    if (checkInDate && checkOutDate) {
      alert("Page will be available soon.");
    }
  };

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return (nights * property.price).toFixed(2);
  };

  useResizeHandler(() => {
    if (window.innerWidth >= 1024) {
      handleCloseModal();
    }
  });

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
        <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
          <div>
            <p className="oneplus:text-base text-sm">
              {checkInDate && checkOutDate
                ? `${formatDateRange(checkInDate, checkOutDate)}`
                : "Add dates for prices"}
            </p>
            {checkInDate && checkOutDate && (
              <p className="text-base"> ${calculateTotalPrice()}</p>
            )}
            {(checkInDate && !checkOutDate) || !checkInDate ? (
              <p className="text-sm flex gap-1 items-center overflow-hidden">
                <span className="mb-0.5">
                  <FaStar />
                </span>
                <span>{property.rating}</span>
              </p>
            ) : null}
          </div>
          <div className="flex gap-2">
            {checkInDate && checkOutDate ? (
              <>
                <Button
                  className="bg-red-600 text-white py-2 px-2 sm:px-4 rounded text-sm xs:text-base"
                  onClick={handleClearAll}
                >
                  Clear All
                </Button>
                <Button
                  className="bg-green-600 text-white py-2 px-2 sm:px-4 rounded text-sm xs:text-base"
                  onClick={handleReserve}
                >
                  Reserve
                </Button>
              </>
            ) : (
              <Button
                className="bg-red-600 text-white py-2 sm:px-4 px-2 text-xs xs:text-base  rounded"
                onClick={() => handleOpenCalendar("check-in")}
              >
                Check availability
              </Button>
            )}
          </div>
        </div>
      </div>

      {calendarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center lg:hidden"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md h-full max-h-full relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </Button>
            <div className="flex flex-col items-center overflow-hidden bg-gray-100">
              {calendarOpen === "check-in" && (
                <>
                  <p className="font-semibold text-lg mb-2 text-center my-5">
                    Select Check-In Date
                  </p>
                  <div className="overflow-hidden my-10">
                    <Calendar
                      setStartDate={(date) => {
                        if (date) {
                          handleDateSelected("check-in", date);
                        }
                      }}
                      closeModal={() => {}}
                    />
                  </div>
                </>
              )}
              {calendarOpen === "check-out" && (
                <>
                  <p className="font-semibold text-lg mb-2 text-center my-5">
                    Select Check-Out Date
                  </p>
                  <div className="flex-grow overflow-hidden">
                    <Calendar
                      setStartDate={(date) => {
                        if (date) {
                          handleDateSelected("check-out", date);
                        }
                      }}
                      closeModal={() => {}}
                    />
                  </div>
                </>
              )}
            </div>
            {errorMessage && (
              <div className="absolute bottom-0 left-0 right-0 bg-red-100 text-red-600 p-3 text-center">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleUnderLg;
