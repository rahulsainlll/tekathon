import React, { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import GuideSection from "@/components/GuideSection";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import bg from "/src/assets/bg.jpg";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelinesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <img src={bg} className="sm:hidden fixed -z-10 h-screen" alt="" />

      <HeroSection
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          timelinesRef,
        }}
      />

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={timelinesRef}>
        <Timeline />
      </section>

      <section>
        <GuideSection />
      </section>

      <section>
        <Collaboration />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
