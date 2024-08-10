import Image from "next/image";
import { IconsProps } from "@/types";

const Icons: React.FC<IconsProps> = ({ containerRef, icons }) => {
  return (
    <div
      className="overflow-hidden  relative cursor-pointer lg:mx-10 md:mx-10"
      ref={containerRef}
    >
      <div
        style={{ WebkitOverflowScrolling: "touch" }}
        className="flex items-center xxs:gap-3 xs:gap-3.5 sm:gap-5 md:gap-7 lg:gap-5 xl:gap-9 2xl:gap-10"
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex-shrink-0 "
            style={{ width: icon.width }}
          >
            <div
              className="relative"
              style={{ width: icon.width, height: icon.height }}
            >
              <Image
                src={icon.photo}
                alt={`Icon ${icon.id}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
