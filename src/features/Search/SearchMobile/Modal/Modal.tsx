import ModalOpen from "./ModalOpen";

const Modal: React.FC<{
  modalOpen: boolean;
  closeModal: () => void;
  stopPropagation: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ modalOpen, closeModal, stopPropagation }) => {
  return (
    <>
      {modalOpen && (
        <ModalOpen closeModal={closeModal} stopPropagation={stopPropagation} />
      )}
    </>
  );
};

export default Modal;
