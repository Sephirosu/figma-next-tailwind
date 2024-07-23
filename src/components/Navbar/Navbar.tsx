import Logo from "./Logo";
import PromoMessage from "./PromoMessage";
import NavLinks from "./NavLinks";

const Navbar: React.FC = () => {
  return (
    <div className="h-20 border-b font-poppins border-[#DDDDDD]">
      <div className="flex justify-between mx-5 md:mx-11 xl:mx-20 lg:mx-20 xs:mx-9 sm:mx-11">
        <Logo />
        <PromoMessage />
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
