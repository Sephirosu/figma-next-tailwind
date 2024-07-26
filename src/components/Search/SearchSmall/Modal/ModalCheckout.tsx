import { useState, useEffect, useRef } from "react";
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes } from "react-icons/fa";

const ModalCheckout = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const datePickerRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <div
        className="border w-[90%] items-center flex cursor-pointer justify-between mt-10 h-14 bg-white"
        onClick={openModal}
      >
        <div className="text-gray-500 ml-4">Check-in</div>
        <div className="mr-4">
          {startDate ? startDate.toDateString() : "Add Dates"}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Calendar setStartDate={setStartDate} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-gray-100 w-full h-full">
        <button
          className="border-2 rounded-full p-2 m-4 bg-white"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <div className="h-full w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ModalCheckout;
