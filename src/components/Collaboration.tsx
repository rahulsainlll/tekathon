
const images = [
  "/src/assets/collab1.PNG",
  "/src/assets/collab2.jpeg",
  "/src/assets/collab3.jpeg",
  "/src/assets/collab4.png",
  "/src/assets/collab5.jpg",
  "/src/assets/collab6.png",
  "/src/assets/collab2.jpeg",
  "/src/assets/collab1.PNG",
  "/src/assets/collab3.jpeg",
  "/src/assets/collab5.jpg",
];

const Collaboration = () => {
  return (
    <section className="relative  py-12 md:mb-28">
      <div className="text-center mb-8">
        <h2 className="font-mono text-xl md:text-3xl font-bold">
          Collaboration Clubs and Partners
        </h2>
      </div>
      <div className="overflow-hidden">
        <div className="slider-container">
          <div className="slider-track">
            {images.map((src, index) => (
              <div key={index} className="slider-item">
                <img
                  src={src}
                  className="w-20 h-20 md:w-48 md:h-48 border rounded-full object-cover"
                />
              </div>
            ))}

            {images.map((src, index) => (
              <div key={`duplicate-${index}`} className="slider-item">
                <img
                  src={src}
                  className="w-20 h-20 md:w-48 md:h-48 borrder rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
