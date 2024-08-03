import PictureHeart from "./PictureHeart";
import PictureSuperhost from "./PictureSuperhost";
import AdditionalInfo from "./AdditionalInfo";
import OwnerInfo from "./OwnerInfo";
import AvailablePrice from "./AvailablePrice";
import Carousel from "./Carousel";
import { Picture } from "./types";

interface PropertyCardProps {
  picture: Picture;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ picture }) => {
  const {
    id,
    photo,
    superhost,
    location,
    owner,
    hobby,
    free,
    price,
    rating,
    height,
    width,
  } = picture;
  return (
    <div key={id} className="relative">
      <Carousel photo={photo} width={width} height={height} />
      <PictureHeart />
      <PictureSuperhost superhost={superhost} />
      <AdditionalInfo location={location} rating={rating} />
      <OwnerInfo owner={owner} hobby={hobby} />
      <AvailablePrice free={free} price={price} />
    </div>
  );
};

export default PropertyCard;
