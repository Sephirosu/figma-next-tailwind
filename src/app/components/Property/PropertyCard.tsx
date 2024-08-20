import Link from "next/link";

import {
  FavouriteIcon,
  SuperhostBadge,
  AdditionalInfo,
  OwnerInfo,
  PriceAndDateRange,
  Carousel,
} from "@app/components/Property";

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
    <div key={id} className="relative ">
      <Link href={`/property/${id}`}>
        <Carousel photos={photos} width={width} height={height} />
      </Link>
      <FavouriteIcon />
      <SuperhostBadge superhost={superhost} />
      <AdditionalInfo location={location} rating={rating} />
      <OwnerInfo owner={owner} hobby={hobby} />
      <PriceAndDateRange availability={availability} price={price} />
    </div>
  );
};

export default PropertyCard;
