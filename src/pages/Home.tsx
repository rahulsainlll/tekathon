import About from "@/components/About";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import GuideSection from "@/components/GuideSection";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Timeline />
      <GuideSection />
      <Collaboration />
      <Footer />
    </div>
  );
};

export default Home;
