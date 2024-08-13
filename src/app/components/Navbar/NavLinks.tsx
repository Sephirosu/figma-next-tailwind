import Frame from "@icons/frame2.svg";
import Frame2 from "@icons/frame1213.svg";

const NavLinks: React.FC = () => {
  return (
    <div className="flex ">
      <span className="text-[#222222] font-black text-sm text-left w-auto align-top mt-8 hidden md:block cursor-pointer">
        Become a host
      </span>
      <span>
        <Frame2 className="ml-5 mt-8 md:block hidden cursor-pointer" />
      </span>
      <span>
        <Frame
          className="ml-6 mt-21 cursor-pointer"
          style={{ width: "auto", height: "auto" }}
        />
      </span>
    </div>
  );
};

export default NavLinks;
