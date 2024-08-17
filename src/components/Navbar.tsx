import img from "./../assets/Intersect.png";
import AuthDialog from "./AuthDialog";

const Navbar = () => {
  return (
    <div className="w-full hidden h-[15vh] relative z-50 sm:flex justify-between px-10 py-5 items-center">
      <div className="w-[40%] h-full px-20 flex items-center">
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

      <div className="w-[60%] h-full flex justify-between px-10 capitalize text-[20px] items-center">
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          about
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          timelines
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          guidelines
        </p>
        <p className="w-32 flex justify-center hover:bg-[#495e57] hover:scale-110 transition-all px-4 py-2 rounded-full cursor-pointer">
          FAQ
        </p>

        <AuthDialog />
      </div>
    </div>
  );
};

export default Navbar;
