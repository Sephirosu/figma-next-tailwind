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
}

interface PropertyCardProps {
  picture: Picture;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ picture }) => {
  return (
    <div key={picture.id} className="relative">
      <PictureFlat picture={picture} />
      <PictureHeart picture={picture} />
      <PictureMulti picture={picture} />
      <PictureSuperhost picture={picture} />
      <AdditionalInfo picture={picture} />
      <OwnerInfo picture={picture} />
      <AvailablePrice picture={picture} />
    </div>
  );
};

export default PropertyCard;
