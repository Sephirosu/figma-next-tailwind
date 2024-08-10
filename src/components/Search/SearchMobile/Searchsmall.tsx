"use client";

import { useState } from "react";
import SearchInputs from "./Modal/SearchInputs";
import Modal from "./Modal/Modal";

const Searchsmall = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative    h-20 font-poppins z-10 ">
      <SearchInputs openModal={openModal} />
      <Modal
        modalOpen={modalOpen}
        closeModal={closeModal}
        stopPropagation={stopPropagation}
      />
    </div>
  );
};

export default Searchsmall;
