import AboutSection from "../../components/AboutSection/AboutSection";
import BannerSection from "../../components/BannerSection/BannerSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SkillSection from "../../components/SkillSection/SkillSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
