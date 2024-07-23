import Image from "next/image";

const SearchButton = () => {
  return (
    <div className="flex items-center   mr-1.5">
      <button className="p-0">
        <div className="relative">
          <Image
            src="/icons/search.svg"
            width={46}
            height={46}
            alt="search"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </button>
    </div>
  );
};

export default SearchButton;
