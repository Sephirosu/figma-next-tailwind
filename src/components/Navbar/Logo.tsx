import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src="/logo/Logotech.png"
        width={102}
        height={32}
        alt="logo"
        className="mt-21 cursor-pointer"
        priority={true}
      />
    </div>
  );
};

export default Logo;
