import { useEffect } from "react";
import {
  CloseModalButton,
  ModalContent,
  ModalFooter,
} from "@/app/components/Search/SearchMobile/Modal";

const ModalOpen: React.FC<{
  closeModal: () => void;
  stopPropagation: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ closeModal, stopPropagation }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={stopPropagation}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-poppins overflow-hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-100 h-full w-full shadow-lg overflow-hidden"
      >
        <CloseModalButton closeModal={closeModal} />
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  );
};

export default ModalOpen;
