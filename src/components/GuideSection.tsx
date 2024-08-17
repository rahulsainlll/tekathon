import guideimg from "./../assets/image copy 2.png";

const GuideSection = () => {
  const guides = [
    { imgSrc: "src/assets/image copy 2.png", link: "#", name: "Themes" },
    {
      imgSrc: "src/assets/image copy 2.png",
      link: "#",
      name: "Problem Statement",
    },
    { imgSrc: "src/assets/image copy 2.png", link: "#", name: "Guildelines" },
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
              src={guideimg}
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
