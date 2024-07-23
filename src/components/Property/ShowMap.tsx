import Image from "next/image";

const ShowMap = () => {
  return (
    <div className="fixed bottom-[160px] left-1/2 transform -translate-x-1/2 cursor-pointer">
      <Image
        src="icons/showmap.svg"
        width={161}
        height={54}
        alt="show map"
        className="bottom-10 "
      />
    </div>
  );
};

export default ShowMap;
