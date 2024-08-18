const GuideSection = () => {
  const guides = [
    {
      imgSrc: "src/assets/themeimage.png", // Make sure the path is correct
      link: "https://sih.gov.in/sih2024PS",
      name: "Themes",
    },
    {
      imgSrc: "src/assets/problem.png", // Make sure the path is correct
      link: "https://sih.gov.in/sih2024PS",
      name: "Problem Statement",
    },
    {
      imgSrc: "src/assets/guid.png", // Make sure the path is correct
      link: "/",
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
