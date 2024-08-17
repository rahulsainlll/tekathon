import img from "./../assets/Path.png";
import mainImg from "./../assets/person.png";
import bush from "./../assets/bushes@2x.png";

import Navbar from "./Navbar";

function HeroSection() {

  const handleRegisterClick = () => {
   
      window.location.href = "/teampanel";
    
  };

  return (
    <div className="w-full md:h-[100vh] relative overflow-hidden">
      <Navbar />

      <img
        className="hidden sm:block  absolute top-0 -right-[7%]"
        src={img}
        alt="not showing"
      />

      <div className="w-full h-[85vh] z-30 relative flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-[50%] flex flex-col justify-center gap-5 h-[80%] text-center md:text-right px-5">
          <h1 className="uppercase text-[2rem] md:text-[5rem] tracking-wide text-[#462626] leading-none">
            tekathon 3.0
          </h1>
          <p className="font-bold tracking-wider text-center md:text-[22px] text-[14px] capitalize leading-none">
            internal hackathon for SIH 2024
          </p>
          <div className="w-[60%] md:w-[35%] mx-auto capitalize flex justify-center text-[10px] md:text-[20px] font-sans hover:scale-110 transition-all duration-[0.4s] text-white items-center h-10 bg-[#495e57] rounded-full">
            <p onClick={handleRegisterClick}>Register now</p>
          </div>
        </div>

        <div className="w-full hidden md:block md:w-[55%] h-full relative mt-10 md:mt-0 justify-center items-center">
          <img
            className="w-[80%] md:w-full h-auto scale-110 object-contain"
            src={mainImg}
            alt="not showing"
          />
        </div>
      </div>

      <div className="absolute w-full z-40 h-[20vh] hidden md:block bottom-0 left-0">
        <img className="w-full h-full object-center" src={bush} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
