import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

interface CarouselProps {
  photo: string[];
  width: number;
  height: number;
}

export default function Carousel({ photo, width, height }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? photo.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === photo.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {photo.map((src, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Picture ${index}`}
              width={width}
              height={height}
              className="w-full cursor-pointer"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-3">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdKeyboardArrowLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdKeyboardArrowRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-1">
          {photo.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${
                curr === i ? "p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
