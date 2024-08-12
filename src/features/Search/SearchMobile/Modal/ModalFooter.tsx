import SearchModalButton from "./SearchModalButton";
import Button from "@/app/components/Button";

const ModalFooter = () => {
  return (
    <div className="justify-between mx-5  bottom-5  left-0 right-0 absolute flex mt-10   items-center  ">
      <Button onClick={() => {}} className="underline cursor-pointer">
        Clear All
      </Button>
      <SearchModalButton />
    </div>
  );
};

export default ModalFooter;
