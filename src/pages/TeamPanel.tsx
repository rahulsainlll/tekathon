import img from "../assets/Intersect.png";

const TeamPanel = () => {
  return (
    <div className="w-full bg-[#f5f7f8] overflow-x-hidden ">
      <div className="w-full h-[14vh] flex flex-col md:flex-row mb-24 xl:mb-0 justify-between">

        <div className="w-full md:w-1/2 h-full py-5 px-6 md:px-20 flex justify-center md:justify-start">
          <img className="w-14 h-14 md:w-20 md:h-20" src={img} alt="" onClick={()=> window.location.href = "/"} />
        </div>

        <div className="w-full md:w-1/2 h-full gap-4 md:gap-8 flex flex-col md:flex-row items-center justify-center pb-3 px-5 md:px-10">
          <div className="px-6 py-2 md:px-10 md:h-12 flex items-center justify-center font-bold capitalize text-[20px] md:text-[20px] tracking-wide font-sans rounded-xl bg-[#ffe668]">
            Guidelines
          </div>
          <div className="px-6 py-2 md:px-10 md:h-12 flex items-center justify-center font-bold capitalize text-[20px] md:text-[20px] tracking-wide font-sans rounded-xl bg-[#ffe668]">
            Logout
          </div>
        </div>
      </div>

      <div className="w-full xl:h-[85vh]  relative h-fit flex items-center justify-center">
        <div className="hidden xl:block absolute -left-14 top-52 font-semibold tracking-wider uppercase -rotate-90 text-3xl text-[#ffe668] ">
          TeamLeader Panel
        </div>
        <div className="w-full md:w-[95%] flex flex-col md:flex-row h-[97%]  bg-green-900 rounded-xl">
          <div className="w-full md:w-[5%] relative h-full flex justify-center md:justify-start pl-5 xl:pl-0">
            <p className="absolute md:static rotate-0 md:-rotate-90 mb-10 w-full whitespace-nowrap top-5  pl-5 xl:pl-0 md:top-72 tracking-wider uppercase text-[1rem] md:text-[1.7rem] font-semibold font-sans text-[#ffe668]">
              TeamLeader Panel
            </p>
          </div>
          <div className="w-full md:w-[95%] h-full px-4 md:px-16">
            <div className="w-full xl:pt-10 pt-16">
              <form className="flex flex-col md:flex-row gap-4 md:gap-16 w-full">
                <input
                  className="w-full md:w-auto px-4 py-3 md:px-10 md:py-5 rounded-xl text-base md:text-xl"
                  type="text"
                  placeholder="Team name"
                />
                <input
                  className="w-full md:w-auto px-4 py-3 md:px-10 md:py-5 rounded-xl text-base md:text-xl"
                  type="text"
                  placeholder="Leader's uid"
                />
                <select className="w-full md:w-auto px-4 py-3 md:px-24 md:text-xl md:py-5 rounded-xl">
                  <option value="" hidden>
                    Choose Theme
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </form>
            </div>
            <div className="mt-8 mb-5 text-xl md:text-2xl text-[#ffe668] capitalize font-semibold">
              Register Members
            </div>

            <div>
              <form className="w-full flex flex-col gap-5 items-center justify-center">
                {[1, 2, 3, 4, 5].map((member, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col md:flex-row gap-4 md:gap-6"
                  >
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder={`${member} Member name`}
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-3 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="UID"
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="Contact No."
                    />
                    <input
                      className="w-full md:w-auto px-4 py-2 md:px-5 md:py-[5px] rounded-xl"
                      type="text"
                      placeholder="Gender"
                    />
                  </div>
                ))}
                <div className="w-full mt-5 flex flex-col items-center justify-center gap-4">
                  <div className="w-[90%] md:w-[60%] py-2 capitalize bg-[#ffe668] text-center text-xl md:text-2xl font-semibold font-sans rounded-xl">
                    Upload PPT
                  </div>
                  <div className="w-[90%] md:w-[60%] flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                    <div className="w-full md:w-[49%] py-2 md:py-1 bg-[#ffe668] text-[20px] md:text-[1.2rem] text-center font-sans font-semibold rounded-lg">
                      Save and Preview
                    </div>
                    <div className="w-full md:w-[49%] mb-5 py-2 md:py-1 bg-[#ffe668] text-[20px] md:text-[1.2rem] text-center font-sans font-semibold rounded-lg">
                      Submit
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPanel;
