import { ApartmentDetailsProps } from "@/types";

const ApartmentDetails: React.FC<ApartmentDetailsProps> = ({ property }) => {
  return (
    <section>
      <div className="my-6">
        <h2 className="text-sm sm:text-xl font-semibold">
          Entire home in {property.location}
        </h2>
        <p className="text-xs sm:text-base">Guests</p>
      </div>
    </section>
  );
};

export default ApartmentDetails;
