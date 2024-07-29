import { useState, useEffect } from "react";

import { SlMinus } from "react-icons/sl";
import { BsPlusCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

type SetterFunction = React.Dispatch<React.SetStateAction<number>>;

const ModalWho: React.FC = () => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);
  const [showFullScreen, setShowFullScreen] = useState<boolean>(false);

  const totalGuests: number = adults + children + infants + pets;
  const maxTotal: number = 13;

  const minusPeople = (setter: SetterFunction) => {
    setter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const plusPeople = (setter: SetterFunction) => {
    setter((prev) => (totalGuests < maxTotal ? prev + 1 : prev));
  };

  const handleClick = () => {
    setShowFullScreen(true);
  };

  const handleClose = () => {
    setShowFullScreen(false);
  };

  return (
    <>
      <div
        className="border mr-10 items-center cursor-pointer justify-between flex mt-10 h-14 bg-white"
        onClick={handleClick}
      >
        <div className="text-gray-500 ml-4">Who</div>
        <div className="outline-none rounded mr-4">
          {totalGuests > 0 ? `Guests: ${totalGuests}` : "Add People"}
        </div>
      </div>

      {showFullScreen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white pt-20 ">
          <div className="flex items-center mb-4 ml-5">
            <BiArrowBack
              className="w-6 h-6 cursor-pointer "
              onClick={handleClose}
            />
            <div className=" text-xl font-semibold ml-[16px] ">
              Whos coming?
            </div>
          </div>
          <div className="flex flex-col mx-5 space-y-10 ">
            <div className="flex justify-between mt-4 ">
              <div>
                <div className="text-lg font-bolder  ">Adults</div>
                <span className="text-sm text-gray-400">Ages 13 or above</span>
              </div>
              <div className="flex items-center">
                <button
                  className="border rounded-full mx-2 text-gray-600 "
                  onClick={() => minusPeople(setAdults)}
                >
                  <SlMinus className="w-8 h-8" />
                </button>
                <span className="font-lighter ">{adults}</span>
                {totalGuests < maxTotal && (
                  <button
                    className="border rounded-full mx-2 text-gray-600"
                    onClick={() => plusPeople(setAdults)}
                  >
                    <BsPlusCircle className="w-8 h-8" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <div className="text-lg font-bolder">Children</div>
                <span className="text-sm text-gray-400">Ages 2 - 12</span>
              </div>
              <div className="flex items-center">
                <button
                  className="border rounded-full mx-2 text-gray-600"
                  onClick={() => minusPeople(setChildren)}
                >
                  <SlMinus className="w-8 h-8" />
                </button>
                <span className="font-lighter">{children}</span>
                {totalGuests < maxTotal && (
                  <button
                    className="border rounded-full mx-2 text-gray-600"
                    onClick={() => plusPeople(setChildren)}
                  >
                    <BsPlusCircle className="w-8 h-8" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <div className="text-lg font-bolder">Infants</div>
                <span className="text-sm text-gray-400">Under 2</span>
              </div>
              <div className="flex items-center">
                <button
                  className="border rounded-full mx-2 text-gray-600"
                  onClick={() => minusPeople(setInfants)}
                >
                  <SlMinus className="w-8 h-8" />
                </button>
                <span className="font-lighter">{infants}</span>
                {totalGuests < maxTotal && (
                  <button
                    className="border rounded-full mx-2 text-gray-600"
                    onClick={() => plusPeople(setInfants)}
                  >
                    <BsPlusCircle className="w-8 h-8" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <div className="text-lg font-bolder">Pets</div>
                <span className="text-sm text-gray-400">
                  Bringing a service animal?
                </span>
              </div>
              <div className="flex items-center">
                <button
                  className="border rounded-full mx-2 text-gray-600"
                  onClick={() => minusPeople(setPets)}
                >
                  <SlMinus className="w-8 h-8" />
                </button>
                <span className="font-lighter">{pets}</span>
                {totalGuests < maxTotal && (
                  <button
                    className="border rounded-full mx-2 text-gray-600"
                    onClick={() => plusPeople(setPets)}
                  >
                    <BsPlusCircle className="w-8 h-8" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWho;
