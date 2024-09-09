import { useState } from "react";
import { DatePickerCalendar } from "@/app/components/Search/SearchNormal";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyFormatter from "@/utils/CurrencyFormatter";
import Button from "@/app/components/Buttons/Button";
import { WhoOpen } from "@/app/components/Search/SearchNormal";
import { ScheduleProps } from "@/types";

const Schedule: React.FC<ScheduleProps> = ({ property }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [showWho, setShowWho] = useState<boolean>(false);
  const [totalGuests, setTotalGuests] = useState<number>(0);

  const today = new Date();
  const nightlyRate = property.price;
  const perGuestFee = 10;

  const handleCheckInChange = (date: Date | [Date, Date] | null) => {
    setCheckInDate(date instanceof Date ? date : null);

    if (checkOutDate && date instanceof Date && date > checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutChange = (date: Date | [Date, Date] | null) => {
    setCheckOutDate(date instanceof Date ? date : null);
  };

  const openWho = () => setShowWho(true);
  const closeWho = () => setShowWho(false);
  const setTotal = (total: number) => setTotalGuests(total);

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const timeDiff =
        new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
      const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const nights = calculateNights();
    return nights * nightlyRate;
  };

  const calculatePerGuestFee = () => {
    return totalGuests * perGuestFee;
  };

  const calculateServiceFee = (totalPrice: number) => {
    return totalPrice * 0.15;
  };

  const totalPrice = calculateTotalPrice();
  const perGuestFeeTotal = calculatePerGuestFee();
  const serviceFee = calculateServiceFee(totalPrice + perGuestFeeTotal);
  const totalWithFee = totalPrice + perGuestFeeTotal + serviceFee;

  return (
    <div className="sticky mt-6 border shadow-md px-3 rounded-md pt-4 bg-white top-6">
      <div className="text-md ml-0.5">
        <span className="font-bold">
          <CurrencyFormatter amount={nightlyRate} currency="USD" />
        </span>
        <span>night</span>
      </div>
      <div className="flex text-xs mt-6 border rounded-lg px-3">
        <div
          className="flex-1 border-r border-gray-300 text-left cursor-pointer"
          onClick={() => {
            const checkInPicker = document.querySelector(
              ".check-in-datepicker"
            ) as HTMLInputElement;
            checkInPicker?.click();
          }}
        >
          <label className="block text-gray-600 mt-1 ml-[7px]  cursor-pointer font-semibold">
            CHECK-IN
          </label>
          <DatePickerCalendar
            selectedDate={checkInDate}
            onChange={(date) => handleCheckInChange(date)}
            placeholder="Add dates"
            dateFormat="MM/dd/yy"
            minDate={today}
            className="check-in-datepicker cursor-pointer mb-0 "
          />
        </div>
        <div
          className="flex-1 text-left ml-4 cursor-pointer"
          onClick={() => {
            const checkOutPicker = document.querySelector(
              ".check-out-datepicker"
            ) as HTMLInputElement;
            checkOutPicker?.click();
          }}
        >
          <label className="block text-gray-600 ml-[7px] mt-1  cursor-pointer font-semibold">
            CHECKOUT
          </label>
          <DatePickerCalendar
            selectedDate={checkOutDate}
            onChange={handleCheckOutChange}
            placeholder="Add dates"
            dateFormat="MM/dd/yy"
            minDate={checkInDate || today}
            className="check-out-datepicker cursor-pointer mb-0 "
          />
        </div>
      </div>

      <div
        className="relative border rounded-lg text-xs cursor-pointer"
        onClick={openWho}
      >
        <button className="text-xs flex flex-col pb-1">
          <span className="text-gray-600 font-semibold ml-5 mt-1">GUESTS:</span>
          <span className="text-sm ml-5">
            {totalGuests} {totalGuests > 1 ? "guests" : "guest"}
          </span>
        </button>
        {showWho && (
          <div className="absolute left-1/3 top-1/3 border-0 mt-2 bg-white rounded-lg shadow-lg">
            <WhoOpen closeWho={closeWho} setTotal={setTotal} />
          </div>
        )}
      </div>

      <div className="relative bg-red-600 text-white text-center rounded-lg py-3 my-2.5 cursor-pointer">
        <Button>Reserve</Button>
      </div>
      <div className="text-xs text-center my-3">You won`t be charged yet</div>
      <div>
        <div className="text-sm underline my-2 flex justify-between">
          <CurrencyFormatter amount={nightlyRate} currency="USD" /> per night x
          {calculateNights()}
          <div>
            <CurrencyFormatter amount={totalPrice} currency="USD" />
          </div>
        </div>
        <div className="text-sm underline my-2 flex justify-between">
          <span>Per guest fee</span>
          <CurrencyFormatter amount={perGuestFeeTotal} currency="USD" />
        </div>
        <div className="text-sm underline my-2 flex justify-between">
          <span>Airbnb service fee (15%)</span>
          <CurrencyFormatter amount={serviceFee} currency="USD" />
        </div>
      </div>
      <div className="my-4 font-bold tracking-tighter">
        Total <CurrencyFormatter amount={totalWithFee} currency="USD" />
      </div>
    </div>
  );
};

export default Schedule;
