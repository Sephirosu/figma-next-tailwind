import ModalWhere from "./ModalWhere";
import ModalCheckin from "./ModalCheckin";
import ModalWho from "./ModalWho";
import ModalCheckout from "./ModalCheckout";

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
