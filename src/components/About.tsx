import about1 from "./../assets/aboutimg1.png";
import about2 from "./../assets/about3.png";

function About() {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="md:text-4xl text-xl font-bold mb-4 text-[#1E1E1E] font-mono">
            About TEKATHON 3.0
          </h2>
          <h3 className="md:text-2xl text-lg font-bold text[#1E1E1E] mb-4 font-mono">
          Join thousands of students at Chandigarh University for Tekathon 3.0, where your innovations and ideas are taken to the next level.
          </h3>
          <p className="md:text-lg text-sm text-[#45474B] mb-6 ">
          Tekathon 3.0 is an internal competition that prepares you for the Smart India Hackathon by fostering creativity and problem-solving skills. Last year, over 4,000 students registered for Tekathon 2.0, with more than 600 advancing to the second round. This year, you have the chance to compete, innovate, and win. Get ready to showcase your skills, collaborate with peers, and push the boundaries of what's possible.
          </p>
         {/* <p className="md:ext-lg text-sm text-[#45474B] mb-6">
            Hack the North aims to empower students like you who are eager to
            learn and create by providing an environment for you to explore and
            build with workshops, mentorship, and hardware. Let us take care of
            travel, food, and the details, so that you can grow your ideas
            beyond a vision.
          </p>*/}
          <a href="https://sih.gov.in/">
          <button className="px-3 py-2 md:px-6 md:py-3  bg-[#495E57] text-white rounded-full">
            Know More
          </button></a>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img src={about1} alt="TEKATHON 3.0" className="w-full h-auto" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 hidden md:block mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
          <img
            src={about2}
            alt="Smart India Hackathon 2024"
            className="w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="md:text-4xl text-xl font-bold mb-4 text[#1E1E1E] font-mono">
            About Smart India Hackathon 2024
          </h2>
          <h3 className="md:text-2xl text-lg font-semibold text[#1E1E1E] mb-4 font-mono">
          Join thousands of students across India as they tackle real-world challenges in the Smart India Hackathon.
          </h3>
          <p className="md:text-lg text-sm text-[#45474B] mb-6">
          SIH is a national initiative designed to empower students to innovate and apply their knowledge in practical ways. By collaborating with industry leaders and government agencies, participants are given the platform to develop creative solutions that address pressing issues. With a focus on critical thinking and hands-on problem-solving, SIH bridges the gap between academic learning and real-world impact.
          </p>
          {/* {<p className="md:text-lg text-sm text-[#45474B] mb-6">
            Hack the North aims to empower students like you who are eager to
            learn and create by providing an environment for you to explore and
            build with workshops, mentorship, and hardware. Let us take care of
            travel, food, and the details, so that you can grow your ideas
            beyond a vision.
          </p>} */}
          <a href="https://sih.gov.in/">
          <button className="px-3 py-2 md:px-6 md:py-3 bg-[#495E57] text-white rounded-full">
            Know More
          </button></a>
        </div>
      </div>
    </section>
  );
}

export default About;
