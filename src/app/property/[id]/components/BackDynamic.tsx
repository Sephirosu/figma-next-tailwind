import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

const BackDynamic = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2 my-3">
      <BiArrowBack
        onClick={() => router.push("/")}
        className="w-8 h-8 cursor-pointer border rounded-full border-gray-800 p-0.5"
      />
    </div>
  );
};

export default BackDynamic;
