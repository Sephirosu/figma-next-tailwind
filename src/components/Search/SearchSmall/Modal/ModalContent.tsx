import ModalWhere from "./ModalWhere";
import ModalWhen from "./ModalWhen";
import ModalWho from "./ModalWho";

const ModalContent = () => {
  return (
    <div className="container  m-2 ml-5 min-w-full ">
      <ModalWhere />
      <ModalWhen />
      <ModalWho />
    </div>
  );
};

export default ModalContent;
