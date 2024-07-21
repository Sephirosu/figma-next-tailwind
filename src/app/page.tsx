import { FaBeer } from "react-icons/fa";
import Image from "next/image";

const App = () => {
  return (
    <div className="font-poppins ml-2 text-lg">
      Gagi <FaBeer />
      ble
      <Image
        src="/image1.png" // Path relative to the `public` directory
        alt="Example Image"
        width={300}
        height={200}
      />
    </div>
  );
};

export default App;
