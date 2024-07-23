"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import ButtonRight from "./ButtonRight";
import ButtonLeft from "./ButtonLeft";
import Icons from "./Icons";

type Icon = {
  id: number;
  photo: string;
  width: number;
  height: number;
};

const Category: React.FC = () => {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/category.json");
        const result: Icon[] = await response.json();
        setIcons(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateArrowVisibility = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0 || hasScrolled);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  }, [hasScrolled]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
      setHasScrolled(true);
      setTimeout(() => {
        updateArrowVisibility();
        if (containerRef.current!.scrollLeft <= 0) {
          setShowLeftArrow(false);
        }
      }, 300);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const newScrollLeft = scrollLeft + clientWidth / 2;

      containerRef.current.scrollBy({
        left: clientWidth / 2,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateArrowVisibility();
        if (newScrollLeft >= scrollWidth - clientWidth) {
          setShowRightArrow(false);
        } else {
          setShowRightArrow(true);
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateArrowVisibility();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [updateArrowVisibility]);

  useEffect(() => {
    updateArrowVisibility();
  }, [icons, hasScrolled, updateArrowVisibility]);

  // Touch handling
  useEffect(() => {
    let startX: number;
    let startScrollLeft: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      startScrollLeft = containerRef.current?.scrollLeft || 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current) {
        const touchX = e.touches[0].pageX;
        const walk = (touchX - startX) * 1.5; // adjust scrolling speed
        containerRef.current.scrollLeft = startScrollLeft - walk;
        updateArrowVisibility();
      }
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", handleTouchStart);
    container?.addEventListener("touchmove", handleTouchMove);

    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [updateArrowVisibility]);

  return (
    <div className="relative border-b border-[#DDDDDD] h-30 flex flex-col mx-8 lg:mx-[77px]">
      {showLeftArrow && <ButtonLeft scrollLeft={scrollLeft} />}
      <Icons containerRef={containerRef} icons={icons} />
      {showRightArrow && <ButtonRight scrollRight={scrollRight} />}
    </div>
  );
};

export default Category;
