import themeImage from "../assets/themeimage.png";
import problemImage from "../assets/problem.png";
import guidImage from "../assets/guid.png";

const GuideSection = () => {
  const guides = [
    {
      imgSrc: themeImage,
      link: "https://sih.gov.in/sih2024PS",
      name: "Themes",
    },
    {
      imgSrc: problemImage,
      link: "https://sih.gov.in/sih2024PS",
      name: "Problem Statement",
    },
    {
      imgSrc: guidImage,
      link: "./Guidance.pdf",
      name: "Guidelines",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-between items-center">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="w-full md:w-96 h-96 bg-[#37545D] flex flex-col items-center p-8 rounded-xl"
          >
            <img
              src={guide.imgSrc}  // Dynamically set the image source
              alt={`Guide ${index + 1}`}
              className="w-60 h-60 object-cover mb-4"
            />
            <a href={guide.link} className="text-white text-2xl font-mono">
              {guide.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideSection;
