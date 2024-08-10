import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "@/app/Button";
import {
  CounterAdults,
  CounterChildren,
  CounterInfants,
  CounterPets,
} from "@/components/Search/SearchNormal";
import { WhoOpenProps } from "@/types";

const WhoOpen: React.FC<WhoOpenProps> = ({ closeWho, setTotal }) => {
  const [adults, setAdults] = useState<number>(0);
  const [child, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);

  const maxTotal = 15;

  useEffect(() => {
    setTotal(adults + child + infants + pets);
  }, [adults, child, infants, pets, setTotal]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".modal-content")) {
        closeWho();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeWho]);

  const totalGuests = adults + child + infants + pets;

  return (
    <div className="absolute modal-content -ml-32 z-10 mt-20 rounded-3xl font-poppins h-96 w-96 bg-white space-y-6 border-black p-6">
      <div className="flex justify-end mr-2.5">
        <Button onClick={closeWho} className="self-end ">
          <FaTimes />
        </Button>
      </div>
      <CounterAdults
        adults={adults}
        setAdults={setAdults}
        totalGuests={totalGuests}
        maxTotal={maxTotal}
      />
      <CounterChildren
        child={child}
        setChildren={setChildren}
        totalGuests={totalGuests}
        maxTotal={maxTotal}
      />
      <CounterInfants
        infants={infants}
        setInfants={setInfants}
        totalGuests={totalGuests}
        maxTotal={maxTotal}
      />
      <CounterPets
        pets={pets}
        setPets={setPets}
        totalGuests={totalGuests}
        maxTotal={maxTotal}
      />
    </div>
  );
};

export default WhoOpen;
