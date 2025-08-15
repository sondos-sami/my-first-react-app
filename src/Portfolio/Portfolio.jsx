import { useState } from "react";
import "../App.css";
<app></app>;
import image1 from "../assets/portfolio/imgi_1_poert1.png";
import image2 from "../assets/portfolio/imgi_2_port2.png";
import image3 from "../assets/portfolio/imgi_3_port3.png";
import { Helmet } from "react-helmet-async";
function Portfolio() {
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const portfolioImages = [
    { src: image1, alt: "Portfolio item 1" },
    { src: image2, alt: "Portfolio item 2" },
    { src: image3, alt: "Portfolio item 3" },
    { src: image1, alt: "Portfolio item 4" },
    { src: image2, alt: "Portfolio item 5" },
    { src: image3, alt: "Portfolio item 6" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="portfolio-container w-75  m-auto">
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Welcome to our homepage" />
      </Helmet>
      <h2 className="portfolio-title m-1">Portfolio Component</h2>
      <div className="d-flex justify-content-center mb-3 align-items-center">
        <span className="line"></span>
        <i class=" mx-2 fa fa-star  " aria-hidden="true"></i>
        <span className="line"></span>
      </div>

      <div className="row">
        {portfolioImages.map((image) => (
          <div className="col-md-4">
            <div className="portfolio-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="portfolio-img" />
              <div className="portfolio-layer">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`portfolio-modal ${showModal ? "active" : ""}`}>
        <span className="portfolio-modal-close" onClick={closeModal}>
          &times;
        </span>
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="portfolio-modal-img"
          />
        )}
      </div>
    </div>
  );
}

export default Portfolio;
