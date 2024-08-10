export interface Apartments {
  id: number;
  photos: string[];
  width: number;
  height: number;
  superhost: boolean;
  location: string;
  owner: string;
  hobby: string;
  free: string;
  price: number;
  rating: number;
}

export interface AdditionalInfoProps {
  location: string;
  rating: number;
}

export interface CarouselProps {
  photos: string[];
  width: number;
  height: number;
}

export interface AvailablePriceProps {
  free: string;
  price: number;
}

export interface Picture {
  owner: string;
  hobby: string;
  free: string;
  price: number;
}

export interface MoreAdditionalInfoProps {
  picture: Picture;
}

export interface OwnerInfoProps {
  owner: string;
  hobby: string;
}

export interface RatingsProps {
  rating: number;
}

export interface SuperhostBadgeProps {
  superhost: boolean;
}

export interface PropertyCardProps {
  properties: Apartments;
}
