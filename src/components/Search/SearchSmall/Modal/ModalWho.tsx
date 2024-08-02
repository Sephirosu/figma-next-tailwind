import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import ModalCounterAdults from "./ModalCounterAdults";
import ModalCounterChildren from "./ModalCounterChildren";
import ModalCounterInfants from "./ModalCounterInfants";
import ModalCounterPets from "./ModalCounterPets";

const ModalCounter: React.FC = () => {
  const [adults, setAdults] = useState<number>(0);
  const [child, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);
  const [showFullScreen, setShowFullScreen] = useState<boolean>(false);

  const totalGuests: number = adults + child + infants + pets;
  const maxTotal: number = 15;

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
        <div className="fixed inset-0 z-50 flex flex-col bg-white ">
          <div className="flex items-center  mt-6 ml-5">
            <BiArrowBack
              className="w-6 h-6 cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className=" font-semibold mt-5 flex justify-center items-center text-2xl">
            Who’s coming?
          </div>
          <div className="flex flex-col mx-5 space-y-10">
            <ModalCounterAdults
              adults={adults}
              setAdults={setAdults}
              totalGuests={totalGuests}
              maxTotal={maxTotal}
            />
            <ModalCounterChildren
              child={child}
              setChildren={setChildren}
              totalGuests={totalGuests}
              maxTotal={maxTotal}
            />
            <ModalCounterInfants
              infants={infants}
              setInfants={setInfants}
              totalGuests={totalGuests}
              maxTotal={maxTotal}
            />
            <ModalCounterPets
              pets={pets}
              setPets={setPets}
              totalGuests={totalGuests}
              maxTotal={maxTotal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCounter;
