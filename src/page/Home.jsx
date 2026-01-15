import CountrySection from "../components/CountrySection";
import HeroSection from "../components/HeroSection";
import InquirySection from "../components/inquirySection";
import ItemSection from "../components/ItemSection";
import Newsletter from "../components/Newsletter";
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
      <Newsletter />
    </div>
  );
};

export default Home;
