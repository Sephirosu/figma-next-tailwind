import {
  Where,
  CheckIn,
  CheckOut,
  Who,
  SearchButton,
} from "@/app/components/Search/SearchNormal";

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
