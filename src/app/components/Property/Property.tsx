"use client";
import { PropertyCard, ShowMap } from "@/app/components/Property";
import { useEffect, useState } from "react";
import { Apartments } from "@/types";

const Property: React.FC = () => {
  const [properties, setProperties] = useState<Apartments[]>([]);
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/property.json");
        const result: Apartments[] = await response.json();
        setProperties(result);
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
      {properties.map((properties) => (
        <PropertyCard key={properties.id} properties={properties} />
      ))}

      {showMap && <ShowMap />}
    </div>
  );
};

export default Property;
