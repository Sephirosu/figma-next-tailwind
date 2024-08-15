"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Apartments } from "@/types";
import { FavouriteIcon } from "@/app/components/Property";
import {
  ImageModal,
  SuperhostDynamic,
  OwnerStatsDynamic,
  ImagesAllDynamic,
  StatsDynamic,
  BackDynamic,
} from "./components";

const PropertyPageDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Apartments | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch("/data/property.json");
        const properties: Apartments[] = await response.json();

        const idNumber = typeof id === "string" ? Number(id) : undefined;

        const foundProperty = properties.find(
          (property) => property.id === idNumber
        );

        setProperty(foundProperty ?? null);
      } catch (error) {
        console.error("Error", error);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (!property) {
    return <div></div>;
  }

  return (
    <div className="container mx-auto  px-9 max-w-screen-xl ">
      <div className="md:mx-2 lg:mx-10 ">
        <BackDynamic />

        <div className="relative left-4 top-1 select-none ">
          <FavouriteIcon />
        </div>
        <SuperhostDynamic property={property} />
        <OwnerStatsDynamic property={property} />
        <ImageModal
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          setIsModalOpen={setIsModalOpen}
        />
        <ImagesAllDynamic
          property={property}
          handleImageClick={handleImageClick}
        />
        <StatsDynamic property={property} />
      </div>
    </div>
  );
};

export default PropertyPageDetails;
