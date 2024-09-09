import { useState } from "react";
import Modal from "./Modal";
import { FaWifi } from "react-icons/fa";
import { AmenitiesListProps } from "@/types";

const AmenitiesList: React.FC<AmenitiesListProps> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const amenities = property.amenities || {};

  const first10Amenities = Object.entries(amenities).slice(0, 8);
  const first5AmenitiesLeft = first10Amenities.slice(0, 4);
  const first5AmenitiesRight = first10Amenities.slice(4, 8);

  const allAmenities = Object.entries(amenities);

  const renderAmenity = (key: string, isAvailable: boolean) => (
    <li
      key={key}
      className={`items-center flex my-2 text-sm sm:text-base ${
        !isAvailable ? "line-through text-gray-500" : ""
      }`}
    >
      <FaWifi className="mr-2 text-gray-600" />
      {key}
    </li>
  );

  return (
    <div className="my-2 text-sm border-b py-2">
      <h2 className="text-lg font-bold py-2">What this place offers</h2>

      <div className="flex flex-col smxs:flex-row justify-between">
        <ul className="w-full md:w-1/2">
          {first5AmenitiesLeft.map(([key, value]) => renderAmenity(key, value))}
        </ul>
        <ul className="w-full md:w-1/2">
          {first5AmenitiesRight.map(([key, value]) =>
            renderAmenity(key, value)
          )}
        </ul>
      </div>
      <button
        onClick={handleShowMore}
        className="mt-2 text-blue-500 hover:underline"
      >
        Show all {allAmenities.length} amenities
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="px-6 py-10 max-h-[80vh] overflow-auto text-sm md:text-lg lg:text-xl">
            <h2 className="text-xl font-bold mb-2">All amenities</h2>
            <ul>
              {allAmenities.map(([key, value]) => renderAmenity(key, value))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AmenitiesList;
