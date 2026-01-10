import CountrySection from "../components/CountrySection";
import HeroSection from "../components/HeroSection";
import InquirySection from "../components/inquirySection";
import ItemSection from "../components/ItemSection";
import RecommendedSection from "../components/RecommendedSection";
import SaleSection from "../components/SaleSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SaleSection />
      <ItemSection />
      <InquirySection />
      <RecommendedSection />
      <ServiceSection />
      <CountrySection />
    </div>
  );
};

export default Home;
