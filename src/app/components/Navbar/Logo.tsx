import Image from "next/image";
import Link from "next/link";
// That's all folks!
const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/logo/Logotech.png"
          width={102}
          height={32}
          alt="logo"
          className="mt-21 cursor-pointer"
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Logo;
