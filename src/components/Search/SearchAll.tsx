"use client";

import Search from "./SearchNormal/Search";
import Searchsmall from "./SearchSmall/Searchsmall";
import useScreenSize from "../hooks/useScreenSize";

const SearchAll: React.FC = () => {
  const isSmallScreen = useScreenSize();

  return (
    <div className="border-b">
      {isSmallScreen ? <Searchsmall /> : <Search />}
    </div>
  );
};

export default SearchAll;
