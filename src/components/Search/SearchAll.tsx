"use client";

import { useState, useEffect } from "react";
import Search from "./SearchNormal/Search";
import Searchsmall from "./SearchSmall/Searchsmall";

const SearchAll: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="border-b p-4 flex justify-center items-center bg-gray-100 h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div className="border-b">
      {isSmallScreen ? <Searchsmall /> : <Search />}
    </div>
  );
};

export default SearchAll;
