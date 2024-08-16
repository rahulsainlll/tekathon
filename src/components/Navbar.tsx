import { useState } from "react";
import img from "./../assets/Intersect.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full hidden  h-[15vh] relative z-50 sm:flex justify-between px-10 py-5 items-center">
      <div className="w-[40%] h-full px-20">
        <img
          className="w-20 h-20 hover:animate-spin"
          src={img}
          alt="not showing"
        />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="w-[60%] h-full flex justify-between px-10 capitalize  text-[20px] items-center">
        <p className="w-32 flex relative z-50 justify-center hover:bg-[#495e57] hover:scale-110 transition-all  px-4 py-2 rounded-full cursor-pointer">
          about
        </p>

        <p className="w-32 flex relative z-50 justify-center hover:bg-[#495e57] hover:scale-110 transition-all  px-4 py-2 rounded-full cursor-pointer">
          timelines
        </p>

        <p className="w-32 flex relative z-50 justify-center hover:bg-[#495e57] hover:scale-110 transition-all  px-4 py-2 rounded-full cursor-pointer">
          guidelines
        </p>

        <p className="w-32 flex relative z-50 justify-center hover:bg-[#495e57] hover:scale-110 transition-all  px-4 py-2 rounded-full cursor-pointer">
          faq
        </p>

        <div className="w-32 flex relative z-50 hover:scale-110 justify-center text-[20px] hover:bg-[#495e57] font-sans transition-all items-center h-10 bg- rounded-full cursor-pointer">
          <p>login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
