import Where from "./Where";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Who from "./Who";
import SearchButton from "./SearchButton";

const Search: React.FC = () => {
  return (
    <div className="flex  md:flex justify-center my-2.5 font-poppins   text-[#222222] ">
      <div className="flex flex-wrap justify-center rounded-full items-center border border-[#D3D3D3] ">
        <Where />
        <CheckIn />
        <CheckOut />
        <Who />
        <SearchButton />
      </div>
    </div>
  );
};

export default Search;
