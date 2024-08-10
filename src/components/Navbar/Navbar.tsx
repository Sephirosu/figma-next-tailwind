import { Logo, MiddleText, NavLinks } from "@components/Navbar";

const Navbar: React.FC = () => {
  return (
    <div className="h-20 border-b font-poppins border-[#DDDDDD]">
      <div className="flex justify-between mx-5 md:mx-11 xl:mx-20 lg:mx-20 xs:mx-9 sm:mx-11">
        <Logo />
        <MiddleText />
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
