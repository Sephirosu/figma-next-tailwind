"use client";
import PropertyCard from "./PropertyCard";
import ShowMap from "./ShowMap";
import { useEffect, useState } from "react";

interface Picture {
  id: number;
  photo: string;
  width: number;
  height: number;
  superhost: boolean;
  multi?: boolean;
  location: string;
  owner: string;
  hobby: string;
  free: string;
  price: number;
}

const Property: React.FC = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/property.json");
        const result: Picture[] = await response.json();
        setPictures(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowMap(scrollPosition > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid font-poppins grid-cols-1 mt-[32px] gap-[37px] mx-8 lg:mx-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-10 2xl:grid-cols-4">
      {pictures.map((picture) => (
        <PropertyCard key={picture.id} picture={picture} />
      ))}

      {showMap && <ShowMap />}
    </div>
  );
};

export default Property;
