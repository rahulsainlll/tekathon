
const images = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  "/path/to/image4.jpg",
  "/path/to/image5.jpg",
  "/path/to/image6.jpg",
  "/path/to/image7.jpg",
  "/path/to/image8.jpg",
  "/path/to/image9.jpg",
  "/path/to/image10.jpg",
];

const Collaboration = () => {
  return (
    <section className="relative py-12 mb-28">
      <div className="text-center mb-8">
        <h2 className="font-mono text-3xl font-bold">
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
                  className="w-48 h-48 bg-[#395D61] rounded-full object-cover"
                />
              </div>
            ))}

            {images.map((src, index) => (
              <div key={`duplicate-${index}`} className="slider-item">
                <img
                  src={src}
                  className="w-32 h-32 bg-[#395D61] rounded-full object-cover"
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
