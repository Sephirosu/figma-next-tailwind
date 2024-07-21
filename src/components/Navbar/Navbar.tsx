
import Logo from "./Logo";
import PromoMessage from "./PromoMessage";
import NavLinks from "./NavLinks";

const Navbar: React.FC = () => {
  return (
    <div className="h-20 border-b font-poppins border-[#DDDDDD]">
      <div className="flex justify-between mx-5 md:mx-10 xl:mx-20 sm:mx-7">
        <Logo />
        <PromoMessage />
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
