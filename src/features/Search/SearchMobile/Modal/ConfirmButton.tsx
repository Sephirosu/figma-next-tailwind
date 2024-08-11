import Button from "@/app/components/Button";
import { ConfirmButtonProps } from "@/types";

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ handleConfirm }) => {
  return (
    <Button
      onClick={handleConfirm}
      className="bg-blue-500 text-white absolute bottom-5 right-7 flex px-3 py-2 rounded-full"
    >
      <span>Confirm</span>
    </Button>
  );
};

export default ConfirmButton;
