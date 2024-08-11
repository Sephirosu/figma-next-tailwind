import { FaTimes } from "react-icons/fa";
import Button from "@/app/components/Button";

const CloseModalButton: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  return (
    <Button
      onClick={closeModal}
      className="border-2 rounded-full p-2 m-4 bg-white text-gray-600"
    >
      <FaTimes />
    </Button>
  );
};

export default CloseModalButton;
