"use client";

import { useState, useEffect, useRef } from "react";

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

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative border-b border-[#DDDDDD] h-30 flex">
      <ButtonLeft scrollLeft={scrollLeft} />

      <Icons containerRef={containerRef} icons={icons} />

      <ButtonRight scrollRight={scrollRight} />
    </div>
  );
};

export default Category;
