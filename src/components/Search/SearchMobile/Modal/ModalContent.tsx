import {
  ModalWhere,
  ModalCheckin,
  ModalCheckout,
  ModalWho,
} from "@/components/Search/SearchMobile/Modal";

const ModalContent = () => {
  return (
    <div className="container overflow-hidden z-50 m-2 ml-5 max-w-full h-full">
      <ModalWhere />
      <ModalCheckin />
      <ModalCheckout />
      <ModalWho />
    </div>
  );
};

export default ModalContent;
