import React, { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import { FaTimes } from "react-icons/fa";

interface WhoOpenProps {
  closeWho: () => void;
  setTotal: (total: number) => void;
}

const WhoOpen: React.FC<WhoOpenProps> = ({ closeWho, setTotal }) => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);
  const maxTotal = 15;

  useEffect(() => {
    setTotal(adults + children + infants + pets);
  }, [adults, children, infants, pets, setTotal]);

  const plusPeople = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    if (adults + children + infants + pets < maxTotal) {
      setter((prev) => prev + 1);
    }
  };

  const minusPeople = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const totalGuests = adults + children + infants + pets;

  return (
    <div className="absolute -ml-32 z-10 mt-20 rounded-3xl font-poppins h-96 w-96 bg-white space-y-6 border-black p-6">
      <button onClick={closeWho}>
        <FaTimes />
      </button>
      <div className="flex justify-between mt-4">
        <div>
          <div className="text-lg font-bolder flex-row">Adults</div>
          <span className="text-sm text-gray-400">Ages 13 or above</span>
        </div>
        <div className="flex items-center">
          <button
            className="border rounded-full mx-2 text-gray-600"
            onClick={() => minusPeople(setAdults)}
          >
            <SlMinus className="w-6 h-6" />
          </button>
          <span className="font-lighter">{adults}</span>
          {totalGuests < maxTotal && (
            <button
              className="border rounded-full mx-2 text-gray-600"
              onClick={() => plusPeople(setAdults)}
            >
              <BsPlusCircle className="w-6 h-6" />
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
            className="border rounded-full mx-2"
            onClick={() => minusPeople(setChildren)}
          >
            <SlMinus className="w-6 h-6 text-gray-600" />
          </button>
          <span className="font-lighter">{children}</span>
          {totalGuests < maxTotal && (
            <button
              className="border rounded-full mx-2 text-gray-600"
              onClick={() => plusPeople(setChildren)}
            >
              <BsPlusCircle className="w-6 h-6" />
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
            className="border rounded-full mx-2"
            onClick={() => minusPeople(setInfants)}
          >
            <SlMinus className="w-6 h-6 text-gray-600" />
          </button>
          <span className="font-lighter">{infants}</span>
          {totalGuests < maxTotal && (
            <button
              className="border rounded-full mx-2 text-gray-600"
              onClick={() => plusPeople(setInfants)}
            >
              <BsPlusCircle className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <div className="text-lg font-bolder flex-row">Pets</div>
          <span className="text-sm text-gray-400">
            Bringing a service animal?
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="border rounded-full mx-2 text-gray-600"
            onClick={() => minusPeople(setPets)}
          >
            <SlMinus className="w-6 h-6" />
          </button>
          <span className="font-lighter">{pets}</span>
          {totalGuests < maxTotal && (
            <button
              className="border rounded-full mx-2 text-gray-600"
              onClick={() => plusPeople(setPets)}
            >
              <BsPlusCircle className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhoOpen;
