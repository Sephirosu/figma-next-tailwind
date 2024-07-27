import { useEffect } from "react";
import CloseModalButton from "./CloseModalButton";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const ModalOpen: React.FC<{
  closeModal: () => void;
  stopPropagation: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ closeModal, stopPropagation }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      onClick={stopPropagation}
      className="fixed inset-0 overflow-hidden bg-black bg-opacity-50 flex justify-center items-center font-poppins"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-100 h-full w-full md:w-auto md:h-auto shadow-lg overflow-hidden"
      >
        <CloseModalButton closeModal={closeModal} />
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  );
};

export default ModalOpen;
