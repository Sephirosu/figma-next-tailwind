import { BiSearch } from "react-icons/bi";

const SearchInputs: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <div
      onClick={openModal}
      className="h-16 mt-3.5 xs:text-[12px] sm:text-sm text-sm flex items-center mx-10 shadow-lg border rounded-full  w-46 "
    >
      <button>
        <BiSearch className="w-8 h-8 ml-5 " />
      </button>
      <div className=" ml-5 flex flex-col ">
        <div className="font-medium text-sm">Where to?</div>
        <ul className="flex gap-5 text-gray-600 list-disc ">
          <p>Anywhere</p>
          <li>Any week</li>
          <li>Add guest</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchInputs;
