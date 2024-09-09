import { useState } from "react";
import Modal from "./Modal";
import Button from "@/app/components/Buttons/Button";
import { ApartmentAboutProps } from "@/types";


const ApartmentAbout: React.FC<ApartmentAboutProps> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { description, space, guestAccess } = property.about;

  const extractFirstTwoSentences = (text: string): string => {
    const sentences = text.split(". ");
    return sentences.slice(0, 2).join(". ") + (sentences.length > 2 ? "." : "");
  };

  return (
    <div className="rounded relative text-xs sm:text-base border-b mt-2 pb-6">
      <p>{extractFirstTwoSentences(description)}</p>
      <Button
        onClick={handleShowMore}
        className="mt-2 text-blue-500 hover:underline"
      >
        Show more
      </Button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4 mx-auto">
            <h2 className="text-xl font-bold mb-2">About this space</h2>
            <p>{description}</p>
            <h3 className="text-lg font-semibold mt-4">The space</h3>
            <p>{space}</p>
            <h3 className="text-lg font-semibold mt-2">Guest access</h3>
            <p>{guestAccess}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ApartmentAbout;
