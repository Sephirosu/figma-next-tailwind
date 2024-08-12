import {
  FavouriteIcon,
  SuperhostBadge,
  AdditionalInfo,
  OwnerInfo,
  AvailablePrice,
  Carousel,
} from "@/features/Property";

import { PropertyCardProps } from "@/types";

const PropertyCard: React.FC<PropertyCardProps> = ({ properties }) => {
  const {
    id,
    photos,
    superhost,
    location,
    owner,
    hobby,
    availability,
    price,
    rating,
    height,
    width,
  } = properties;
  return (
    <div key={id} className="relative">
      <Carousel photos={photos} width={width} height={height} />
      <FavouriteIcon />
      <SuperhostBadge superhost={superhost} />
      <AdditionalInfo location={location} rating={rating} />
      <OwnerInfo owner={owner} hobby={hobby} />
      <AvailablePrice availability={availability} price={price} />
    </div>
  );
};

export default PropertyCard;
