import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { FaTimes } from "react-icons/fa";

interface DateModalProps {
  title: string;
  date: Date | null;
  setDate: (date: Date | null) => void;
}

const DateModal = ({ title, date, setDate }: DateModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="border mr-10 items-center flex cursor-pointer justify-between mt-10 h-14 bg-white"
        onClick={openModal}
      >
        <div className="text-gray-500 ml-4">{title}</div>
        <div className="mr-4">{date ? date.toDateString() : "Add Dates"}</div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-gray-100 w-full h-full">
            <button
              className="border-2 rounded-full p-2 m-4 bg-white"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <div className="h-full w-full overflow-auto">
              <Calendar setStartDate={setDate} closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateModal;
