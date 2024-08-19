export interface Apartments {
  id: number;
  photos: string[];
  width: number;
  height: number;
  superhost: boolean;
  location: string;
  owner: string;
  hobby: string;
  availability: {
    start: string;
    end: string;
  };
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

export interface PriceAndDateRangeProps {
  availability: {
    start: string;
    end: string;
  };
  price: number;
}

export interface Picture {
  owner: string;
  hobby: string;
  free: string;
  price: number;
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

export type HandleImageClick = (image: string) => void;

export interface ImageModalProps {
  isModalOpen: boolean;
  selectedImage: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
}
