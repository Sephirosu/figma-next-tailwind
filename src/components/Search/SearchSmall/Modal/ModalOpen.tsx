import CloseModalButton from "./CloseModalButton";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const ModalOpen: React.FC<{
  closeModal: () => void;
  stopPropagation: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ closeModal, stopPropagation }) => {
  return (
    <div
      onClick={stopPropagation}
      className="fixed inset-0 overflow-hidden bg-black bg-opacity-50 flex justify-center items-center font-poppins"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-100 h-full w-full  shadow-lg overflow-hidden"
      >
        <CloseModalButton closeModal={closeModal} />
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  );
};

export default ModalOpen;
