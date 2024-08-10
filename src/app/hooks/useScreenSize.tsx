import { useState, useEffect } from "react";

const useScreenSize = (breakpoint: number = 768): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;
