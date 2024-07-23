import Image from "next/image";

const NavLinks: React.FC = () => {
  return (
    <div className="flex ">
      <span className="text-[#222222] font-black text-sm text-left w-auto align-top mt-8 hidden md:block cursor-pointer">
        Become a host
      </span>
      <span>
        <Image
          src="icons/frame1213.svg"
          width={18}
          height={18}
          alt="frame"
          className="ml-5 mt-8 md:block hidden cursor-pointer"
        />
      </span>
      <span>
        <Image
          src="icons/frame2.svg"
          width={81}
          height={38}
          alt="login"
          className="ml-6 mt-21 cursor-pointer"
        />
      </span>
    </div>
  );
};

export default NavLinks;
