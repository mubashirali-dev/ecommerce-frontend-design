import HeroSection from "../components/HeroSection";
import InquirySection from "../components/inquirySection";
import ItemSection from "../components/ItemSection";
import SaleSection from "../components/SaleSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SaleSection />
      <ItemSection />
      <InquirySection />
    </div>
  );
};

export default Home;
