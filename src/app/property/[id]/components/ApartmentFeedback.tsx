import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ApartmentFeedbackProps } from "@/types";

const ApartmentFeedback: React.FC<ApartmentFeedbackProps> = ({ property }) => {
  return (
    <section aria-labelledby="feedback">
      <div className="flex container justify-between cursor-pointer items-center border smxs:px-7 xxs:px-1 py-4 rounded-md">
        <div className="flex gap-1">
          <Image
            src="/icons/favouriteguestleft.svg"
            width={30}
            height={30}
            className="xxs:hidden xs:inline-block"
            alt="Guest favourite left decoration"
          />
          <div className="flex flex-col items-center font-semibold xss:text-xs smxs:text-base">
            <span className="-my-0.5">Guest</span>
            <span className="-my-0.5">favourite</span>
          </div>
          <Image
            src="/icons/favouriteguestright.svg"
            width={30}
            height={30}
            className="xxs:hidden xs:inline-block"
            alt="Guest favourite right decoration"
          />
        </div>
        <div className="font-semibold mx-12 xs:hidden xxs:hidden md:inline-block sm:text-sm md:text-sm px-3 tracking-tight">
          One of the most loved homes on Airbnb, according to guests
        </div>
        <div>
          <div className="flex items-center sm:text-lg text-sm gap-0.5 smxs:gap-6 smxs:mr-3 xxs:mr-0.5 pb-2">
            <div className="flex flex-col items-center font-semibold smxs:border-r smxs:mr-5">
              <div className="mt-0.5 mr-8">{property.rating}</div>
              <div className="text-xs mt-1 mr-7 flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
            <div className="flex flex-col items-center smxs:-ml-3 -ml-5">
              <span className="font-bold mt-0.5">51</span>
              <span className="underline tracking-tighter text-sm">
                Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentFeedback;

// kad budemo api pravili, napravit cemo za sve da mozemo povlaciti
