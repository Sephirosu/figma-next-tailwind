import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { ImageModalProps } from "@/types";
import Button from "@/app/components/Buttons/Button";

const ImageModal: React.FC<ImageModalProps> = ({
  isModalOpen,
  selectedImage,
  setIsModalOpen,
}) => {
  return (
    <>
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
          onClick={() => setIsModalOpen(false)}
          aria-hidden="true"
        >
          <div
            className="relative  rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="absolute -top-10 right-1 text-gray-400 text-2xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image modal"
            >
              <FaTimes />
            </Button>
            <Image
              src={selectedImage}
              alt="Zoomed"
              width={500}
              height={500}
              className="max-w-full max-h-screen object-contain cursor-default"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
