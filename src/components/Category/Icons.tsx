import { RefObject } from "react";
import Image from "next/image";

type Icon = {
  id: number;
  photo: string;
  width: number;
  height: number;
};

type IconsProps = {
  containerRef: RefObject<HTMLDivElement>;
  icons: Icon[];
};

const Icons: React.FC<IconsProps> = ({ containerRef, icons }) => {
  return (
    <div
      className=" overflow-hidden relative cursor-pointer lg:mx-10 md:mx-10"
      ref={containerRef}
    >
      <div
        style={{ WebkitOverflowScrolling: "touch" }}
        className="flex items-center xxs:gap-3 xs:gap-3.5 sm:gap-5 md:gap-7 lg:gap-5 xl:gap-9 xxl:gap-12 "
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex-shrink-0 "
            style={{ width: icon.width }}
          >
            <Image
              src={icon.photo}
              alt={`Icon ${icon.id}`}
              width={icon.width}
              height={icon.height}
              className="hover:scale-110  transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
