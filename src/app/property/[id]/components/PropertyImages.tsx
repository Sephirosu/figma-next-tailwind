import Image from "next/image";
import { ImagesAllProps } from "@/types";

const PropertyImages: React.FC<ImagesAllProps> = ({
  property,
  handleImageClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-1">
      <div className="flex-grow md:w-1/2 lg:w-1/2">
        <Image
          src={property.photos[0]}
          alt="Main Photo of the Property"
          width={800}
          height={600}
          className="w-full h-auto object-cover cursor-pointer rounded-none md:rounded-lg"
          onClick={() => handleImageClick(property.photos[0])}
          priority
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-1 md:w-1/2 lg:w-1/2">
        {property.photos.slice(1, 5).map((photo, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={photo}
              alt={`Additional photo ${index + 2} of the property`}
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick(photo)}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
