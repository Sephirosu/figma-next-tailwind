import { AddedInfo, FooterLinks } from "@components/Footer";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col border-t mt-[5px] border-gray-300 w-full">
      <div className="flex justify-between pb-2  mx-8 sm:mx-10 text-[8px] lg:text-[13px] lg:mx-20">
        <FooterLinks />
        <AddedInfo />
      </div>
    </div>
  );
};

export default Footer;
