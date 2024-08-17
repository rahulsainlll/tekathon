import React, { useState } from "react";
import img from "./../assets/Intersect.png";
import AuthDialog from "./AuthDialog";
import FAQDialog from "./FAQDialog";
import { MenuIcon, XIcon } from "lucide-react";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    timelinesRef: React.RefObject<HTMLDivElement>;
  };
}

const Navbar = ({ scrollToSection, refs }: NavbarProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-between px-10 py-5 items-center">
        <div className="w-[40%] flex items-center">
          <img
            className="w-16 h-16 hover:animate-spin"
            src={img}
            alt="not showing"
          />
          <img
            className="w-16 h-16 hover:animate-spin"
            src={img}
            alt="not showing"
          />
        </div>

        <div className="w-[60%] flex justify-between capitalize text-[20px] items-center">
          <p
            className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            about
          </p>
          <p
            className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer"
            onClick={() => scrollToSection(refs.timelinesRef)}
          >
            timelines
          </p>
          <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
            guidelines
          </p>
          <FAQDialog />
          <AuthDialog />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex justify-between items-center px-4 py-3 border-b">
        <div className="flex items-center">
          <img
            className="w-12 h-12 hover:animate-spin"
            src={img}
            alt="not showing"
          />
          <img
            className="w-12 h-12 hover:animate-spin"
            src={img}
            alt="not showing"
          />
        </div>
        <button className="text-xl" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white w-full p-4 border-t border-gray-200">
          <p
            className="w-full text-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer"
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setMobileMenuOpen(false);
            }}
          >
            about
          </p>
          <p
            className="w-full text-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer"
            onClick={() => {
              scrollToSection(refs.timelinesRef);
              setMobileMenuOpen(false);
            }}
          >
            timelines
          </p>
          <p className="w-full text-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
            guidelines
          </p>
          <FAQDialog />
          <AuthDialog />
        </div>
      )}
    </header>
  );
};

export default Navbar;
