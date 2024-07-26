import ModalWhere from "./ModalWhere";
import ModalCheckin from "./ModalCheckin";
import ModalWho from "./ModalWho";
import ModalCheckout from "./ModalCheckout";

const ModalContent = () => {
  return (
    <div className="container  m-2 ml-5 min-w-full ">
      <ModalWhere />
      <ModalCheckin />
      <ModalCheckout />
      <ModalWho />
    </div>
  );
};

export default ModalContent;
