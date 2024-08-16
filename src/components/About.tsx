import about1 from "./../assets/aboutimg1.png";
import about2 from "./../assets/about3.png";

function About() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="md:text-4xl text-xl font-bold mb-4 text-[#1E1E1E] font-mono">
            About TEKATHON 3.0
          </h2>
          <h3 className="md:text-2xl text-lg font-bold text[#1E1E1E] mb-4 font-mono">
            Internal Hackathon
          </h3>
          <p className="md:text-lg text-sm text-[#45474B] mb-6 f">
            Gather with 1,000 students from around the world and industry
            leaders at the University of Waterloo to collaborate and bring your
            ideas to life in 36 hours.
          </p>
          <p className="md:ext-lg text-sm text-[#45474B] mb-6">
            Hack the North aims to empower students like you who are eager to
            learn and create by providing an environment for you to explore and
            build with workshops, mentorship, and hardware. Let us take care of
            travel, food, and the details, so that you can grow your ideas
            beyond a vision.
          </p>
          <button className="px-6 py-3 bg-[#495E57] text-white rounded-full">
            Know More
          </button>
        </div>

        <div className="md:w-1/2">
          <img src={about1} alt="TEKATHON 3.0" className="w-full h-auto" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
          <img
            src={about2}
            alt="Smart India Hackathon 2024"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-4 text[#1E1E1E] font-mono">
            About Smart India Hackathon 2024
          </h2>
          <h3 className="text-2xl font-semibold text[#1E1E1E] mb-4 font-mono">
            Government Hackathon
          </h3>
          <p className="text-lg text-[#45474B] mb-6">
            Gather with 1,000 students from around the world and industry
            leaders at the University of Waterloo to collaborate and bring your
            ideas to life in 36 hours.
          </p>
          <p className="text-lg text-[#45474B] mb-6">
            Hack the North aims to empower students like you who are eager to
            learn and create by providing an environment for you to explore and
            build with workshops, mentorship, and hardware. Let us take care of
            travel, food, and the details, so that you can grow your ideas
            beyond a vision.
          </p>
          <button className="px-6 py-3 bg-[#495E57] text-white rounded-full">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
