import Image from "next/image";
import { Apartments } from "@/types";
import { HandleImageClick } from "@/types";

interface ImagesAllProps {
  property: Apartments;
  handleImageClick: HandleImageClick;
}

const ImagesAllDynamic: React.FC<ImagesAllProps> = ({
  property,
  handleImageClick,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 ">
      <div className="flex-grow lg:w-2/3">
        <Image
          src={property.photos[0]}
          alt="Main Photo"
          width={800}
          height={600}
          className="w-full h-auto object-cover cursor-pointer rounded-none"
          onClick={() => handleImageClick(property.photos[0])}
          priority
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:w-1/2 ">
        {property.photos.slice(1, 5).map((photo, index) => (
          <div key={index} className="relative w-full h-full ">
            <Image
              src={photo}
              alt={`Photo ${index + 2}`}
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

export default ImagesAllDynamic;
