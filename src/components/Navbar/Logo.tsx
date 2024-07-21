import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src="logo/logo.svg"
        width={102}
        height={32}
        alt="logo"
        className="mt-21"
      />
    </div>
  );
};

export default Logo;
