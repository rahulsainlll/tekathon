import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover py-3 bg-center sm:py-20 text-white"
      style={{ backgroundImage: "url('/src/assets/footer.png')" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-xl mb-4">
          #YourHacktheCU • What will you create?
        </h2>
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
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask your queries..."
              className="p-3 pr-12 rounded-full text-black"
            />
            <button className="absolute right-0 top-0 mt-3 mr-3 text-white">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-sm mb-8">
          Made with 💛 by Connecting All Circles - Chandigarh University
          Students
        </p>
        <div className="flex justify-center space-x-4">
          <img className="w-10 h-10 rounded-full" src="" alt="Rounded avatar"/>
          <div className="w-12 h-12 rounded-full bg-white"></div>
          <div className="w-12 h-12 rounded-full bg-black"></div>
          <div className="w-12 h-12 rounded-full bg-white"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
