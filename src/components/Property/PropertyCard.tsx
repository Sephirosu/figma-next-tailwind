import PictureFlat from "./PictureMain";
import PictureHeart from "./PictureHeart";
import PictureMulti from "./PictureMulti";
import PictureSuperhost from "./PictureSuperhost";
import AdditionalInfo from "./AdditionalInfo";
import OwnerInfo from "./OwnerInfo";
import AvailablePrice from "./AvailablePrice";

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
  rating: number;
}

interface PropertyCardProps {
  picture: Picture;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ picture }) => {
  const {
    id,
    photo,
    width,
    height,
    superhost,
    multi,
    location,
    owner,
    hobby,
    free,
    price,
    rating,
  } = picture;
  return (
    <div key={id} className="relative">
      <PictureFlat id={id} photo={photo} width={width} height={height} />
      <PictureHeart />
      <PictureMulti multi={multi} />
      <PictureSuperhost superhost={superhost} />
      <AdditionalInfo location={location} rating={rating} />
      <OwnerInfo owner={owner} hobby={hobby} />
      <AvailablePrice free={free} price={price} />
    </div>
  );
};

export default PropertyCard;
