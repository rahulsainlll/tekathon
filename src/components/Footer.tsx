import { Instagram, Mail } from "lucide-react";
import footerimg from "./../assets/footer.png";

import avatar1 from "./../assets/avatar1.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center py-12 md:py-20 text-white"
      style={{ backgroundImage: `url(${footerimg})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-lg md:text-xl mb-4">#YourHacktheCU • What will you create?</h2>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#guideline" className="hover:underline">
                Guideline
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:underline">
                Timeline
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center mb-8 space-x-20">
          <Mail className="text-2xl cursor-pointer" />
          <Instagram className="text-2xl cursor-pointer" />
        </div>

        <p className="text-sm mb-8">
          Made with 💛 by Connecting All Circles - Chandigarh University
        </p>
        <div className="flex justify-center space-x-4">
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            src={avatar1}
            alt="Rounded avatar"
          />
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            src={avatar1}
            alt="Rounded avatar"
          />
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            src={avatar1}
            alt="Rounded avatar"
          />
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            src={avatar1}
            alt="Rounded avatar"
          />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
