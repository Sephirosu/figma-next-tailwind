"use client";

import { useState, useEffect } from "react";
import Search from "./SearchNormal/Search";
import Searchsmall from "./SearchSmall/Searchsmall";

const SearchAll: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b">
      {isSmallScreen ? <Searchsmall /> : <Search />}
    </div>
  );
};

export default SearchAll;
