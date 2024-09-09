import React, { useEffect, useCallback } from "react";
import Button from "@/app/components/Buttons/Button";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10 flex items-center justify-center modal-overlay smxs:px-10"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded shadow-lg relative">
        <Button
          onClick={onClose}
          className="ml-6 mt-2 text-black hover:text-gray-700 text-2xl"
        >
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
