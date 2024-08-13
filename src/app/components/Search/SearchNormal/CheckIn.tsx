import DatePickerCalendar from "./DatePickerCalendar";

const CheckIn: React.FC = () => {
  return (
    <div className="flex flex-col ml-4 border-r-[1px]">
      <div className="font-black text-left text-xs mt-3.5 ml-2">Check-in</div>
      <DatePickerCalendar
        placeholder="Add dates"
        dateFormat="MM-dd-yy"
        minDate={new Date()}
        maxDate={new Date("2026-12-31")}
      />
    </div>
  );
};

export default CheckIn;
