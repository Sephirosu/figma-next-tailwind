import { BiSearch } from "react-icons/bi";

const SearchModalButton = () => {
  return (
    <button className="bg-red-500 flex px-3 py-2 rounded-full text-white">
      <span className="mt-[5px] mx-1  cursor-pointer">
        <BiSearch />
      </span>
      <span className="mr-1">Search</span>
    </button>
  );
};

export default SearchModalButton;
