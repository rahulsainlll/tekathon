import img from "../../public/intersect.png"
const Navbar = () => {
  return (
    <div className='w-full h-[15vh] relative z-30 flex justify-between px-10 py-5  items-center '>
               <div className='w-[40%] h-full px-20'>
                              <img className='w-20 h-20 hover:animate-spin ' src={img} alt="not showing" />
               </div>
               <div className='w-[55%] h-full flex justify-between px-10 capitalize f2 text-[20px]   items-center'>
                <p>about</p>
                <p>timelines</p>
                <p>guidlines</p>
                <div className='w-44 flex justify-center text-[20px] font-sans hover:scale-110 transition-all duration-[0.4s] text-white items-center h-10 bg-[#495e57] rounded-full'>
                  <p>login</p>
                </div>
               </div>
    </div>
  )
}

export default Navbar