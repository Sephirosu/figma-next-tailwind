import SearchModalButton from "./SearchModalButton";

const ModalFooter = () => {
  return (
    <div className="justify-between mx-8  bottom-5  left-0 right-0 absolute flex mt-10   items-center  ">
      <div className="underline cursor-pointer">Clear All</div>
      <SearchModalButton />
    </div>
  );
};

export default ModalFooter;
