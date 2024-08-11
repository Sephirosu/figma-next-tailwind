import { BiSearch } from "react-icons/bi";
import Button from "@/app/components/Button";

const SearchModalButton: React.FC = () => {
  return (
    <Button
      className="bg-red-500 text-white flex px-3 py-2 rounded-full"
      onClick={() => {
        alert("not today :))))))");
      }}
    >
      <span className="mt-[5px] mx-1 cursor-pointer">
        <BiSearch />
      </span>
      <span className="mr-1">Search</span>
    </Button>
  );
};

export default SearchModalButton;
