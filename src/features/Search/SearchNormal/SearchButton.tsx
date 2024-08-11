import Search from "@icons/search.svg"

const SearchButton = () => {
  return (
    <div className="flex items-center   mr-1.5">
      <button className="p-0">
        <div className="relative">
          <Search
          
          
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </button>
    </div>
  );
};

export default SearchButton;
