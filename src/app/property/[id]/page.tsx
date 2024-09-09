"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Apartments } from "@/types";
import {
  ApartmentName,
  ImageModal,
  PropertyImages,
  ApartmentDetails,
  ApartmentFeedback,
  Hoster,
  ApartmentFeatures,
  Schedule,
  ApartmentAbout,
  AmenitiesList,
  AccesibilityFeature,
  OverallRating,
  SingleRating,
  ScheduleTabletMobile,
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
        console.error("Error", error); // trenutno,dok ne skontamo kakve cemo errore koristiti,biznis logika ?!
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
    <div className="mx-auto px-9 max-w-screen-xl">
      <div className="md:mx-2 lg:mx-10 xxs:mx-0">
        <ApartmentName property={property} />
        <ImageModal
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          setIsModalOpen={setIsModalOpen}
        />
        <PropertyImages
          property={property}
          handleImageClick={handleImageClick}
        />
        <div className="lg:flex">
          <div className="container flex flex-col lg:w-2/3">
            <ApartmentDetails property={property} />
            <ApartmentFeedback property={property} />
            <Hoster property={property} />
            <ApartmentFeatures property={property} />
            <ApartmentAbout property={property} />
            <AmenitiesList property={property} />
            <AccesibilityFeature property={property} />
            <ScheduleTabletMobile property={property} />
          </div>
          <div className="lg:w-1/3 lg:pl-6 relative">
            <div className="sticky top-6 space-y-4 hidden lg:block">
              <Schedule property={property} />
            </div>
          </div>
        </div>
        <div>
          <OverallRating property={property} />
          <SingleRating property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPageDetails;
