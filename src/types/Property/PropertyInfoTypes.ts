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
  aptname: string;
  profilepicture: string;
  features?: {
    dedicatedWorkspace?: Feature;
    kitchen?: Feature;
    wifi?: Feature;
    pool?: Feature;
    parking?: Feature;
  };
  checkIn?: {
    selfCheckIn?: Feature;
  };
  cancellationPolicy?: CancellationPolicy;
  about: About;
  ratingCategories?: RatingCategories;
  amenities?: Record<string, boolean>;
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
  property: Apartments;
}

export type HandleImageClick = (image: string) => void;

export interface ImageModalProps {
  isModalOpen: boolean;
  selectedImage: string | null;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface Feature {
  isAvailable: boolean;
  title: string;
  description: string;
}

export interface CancellationPolicy {
  isAvailable: boolean;
  messageTemplate: string;
  cancellationDate: string;
  description: string;
}

export interface About {
  description: string;
  space: string;
  guestAccess: string;
}

export interface RatingCategories {
  OverallRating: Record<string, string>;
  Cleanliness?: string;
  Accuracy?: string;
  Communication?: string;
  Location?: string;
  CheckIn?: string;
  Value?: string;
}

export interface ApartmentNameProps {
  property: Apartments;
}

export interface ImagesAllProps {
  property: Apartments;
  handleImageClick: HandleImageClick;
}

export interface ApartmentDetailsProps {
  property: Apartments;
}

export interface ApartmentFeedbackProps {
  property: Apartments;
}

export interface HosterProps {
  property: Apartments;
}

export interface ApartmentFeaturesProps {
  property: Apartments;
}

export interface AmenitiesListProps {
  property: Apartments;
}

export interface AccesibilityFeatureProps {
  property: Apartments;
}

export interface ScheduleUnderLgProps {
  property: Apartments;
}

export interface Property {
  price: number;
}

export interface ScheduleProps {
  property: Property;
}

export interface OverallRatingProps {
  property: {
    rating: number;
  };
}

export interface SingleRatingProps {
  property: Apartments;
}

export interface About {
  description: string;
  space: string;
  guestAccess: string;
}

export interface Apartments {
  about: About;
}

export interface ApartmentAboutProps {
  property: Apartments;
}
