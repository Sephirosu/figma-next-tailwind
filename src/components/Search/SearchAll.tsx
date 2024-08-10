"use client";

import Search from "./SearchNormal/Search";
import Searchsmall from "./SearchMobile/Searchsmall";
import { useScreenSize } from "@/app/hooks";

const SearchAll: React.FC = () => {
  const isSmallScreen = useScreenSize();

  return (
    <div className="border-b">
      {isSmallScreen ? <Searchsmall /> : <Search />}
    </div>
  );
};

export default SearchAll;
