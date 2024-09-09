import Image from "next/image";
import { HosterProps } from "@/types";

const Hoster: React.FC<HosterProps> = ({ property }) => {
  return (
    <div className="border-b mt-6 pb-6 flex items-center">
      <div className="mr-3 w-10 h-10 relative">
        <Image
          src={property.profilepicture}
          alt={`Profile picture of ${property.owner}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
          sizes="(max-width: 640px) 40px, (max-width: 768px) 50px, 60px"
        />
      </div>
      <div>
        <div className="text-base font-semibold">
          Hosted by {property.owner}
        </div>
        <ul className="flex items-center gap-2 text-sm">
          <li>
            {property.superhost && (
              <div className="text-gray-600 py-1 inline-block">Superhost</div>
            )}
          </li>
          <li className="text-gray-600 list-disc ml-5">{property.hobby}</li>
        </ul>
      </div>
    </div>
  );
};

export default Hoster;
