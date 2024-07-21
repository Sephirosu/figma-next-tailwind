import { BiSearch } from "react-icons/bi";

const ModalWhere = () => {
  return (
    <>
      <div className="text-xl font-semibold mb-3 ">Where to?</div>
      <div className="border flex h-14 w-[90%] bg-white rounded ">
        <BiSearch className="w-5 h-9 mt-2.5 ml-4 cursor-pointer" />
        <input
          className=" ml-6 h-13 rounded outline-none w-full"
          placeholder="Search destination"
        ></input>
      </div>
    </>
  );
};

export default ModalWhere;
