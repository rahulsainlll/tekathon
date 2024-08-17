import img1 from "/src/assets/collab6.png";
import img2 from "/src/assets/collab2.jpeg";
import img3 from "/src/assets/collab3.jpeg";
import img4 from "/src/assets/collab4.png";
import img5 from "/src/assets/collab5.jpg";
import img6 from "/src/assets/collab6.png";
import img7 from "/src/assets/collab2.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img1, img3, img5];

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
