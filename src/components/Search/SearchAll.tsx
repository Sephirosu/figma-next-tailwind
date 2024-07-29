"use client";

import { useMediaQuery } from "react-responsive";
import Search from "./SearchNormal/Search";
import Searchsmall from "./SearchSmall/Searchsmall";

const SearchAll: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="border-b">
      {isSmallScreen ? <Searchsmall /> : <Search />}
    </div>
  );
};

export default SearchAll;
