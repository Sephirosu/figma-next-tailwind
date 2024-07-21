import { FaTimes } from "react-icons/fa";

const CloseModalButton: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  return (
    <button
      onClick={closeModal}
      className="border-2  rounded-full p-2 m-4 bg-white"
    >
      <FaTimes />
    </button>
  );
};

export default CloseModalButton;
