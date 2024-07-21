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
    <div className="flex-1 mx-4 lg:ml-10 overflow-hidden" ref={containerRef}>
      <div className="flex items-center">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex-shrink-0 mx-4"
            style={{ width: icon.width }}
          >
            <Image
              src={icon.photo}
              alt={`Icon ${icon.id}`}
              width={icon.width}
              height={icon.height}
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
