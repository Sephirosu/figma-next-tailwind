import AddedInfo from "./AddedInfo";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
  return (
    <div className="flex border-t  justify-between pb-2 mt-[5px] mx-8 sm:mx-10 text-[8px] lg:text-[13px] lg:mx-20    ">
      <FooterLinks />
      <AddedInfo />
    </div>
  );
};

export default Footer;
