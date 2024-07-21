import Navbar from "@/components/Navbar/Navbar"; // stavio sam da koristim ../ pri instalaciji
import Category from "../components/Category/Category";
import SearchAll from "../components/Search/SearchAll";
import Property from "../components/Property/Property";
import Footer from "../components/Footer/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <SearchAll />
      <Category />
      <Property />
      <Footer />
    </div>
  );
};

export default Page;
