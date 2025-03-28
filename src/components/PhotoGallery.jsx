import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Import optimized images
import img3 from "../assets/img3.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: img8, alt: "Community members gathering" },
    { src: img3, alt: "Children participating in activities" },
    { src: img9, alt: "Volunteers at work" },
    { src: img7, alt: "Educational session in progress" },
    { src: img5, alt: "Food distribution event" },
    { src: img6, alt: "Healthcare outreach program" }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      {/* SEO Optimization */}
      <Helmet>
        <title>LAVE Uganda - Photo Gallery</title>
        <meta
          name="description"
          content="Browse our gallery showcasing LAVE Uganda's community outreach and support programs."
        />
        <meta name="keywords" content="LAVE Uganda, community support, elderly care, donations, photo gallery" />
        <meta name="author" content="LAVE Uganda" />
        <meta property="og:title" content="LAVE Uganda - Our Impact in Pictures" />
        <meta
          property="og:description"
          content="Explore moments of impact from LAVE Uganda's efforts in supporting vulnerable communities."
        />
        <meta property="og:image" content="https://www.laveug.org/assets/img8.png" />
        <meta property="og:url" content="https://www.laveug.org/gallery" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments that capture the impact of our work and the joy we share with our community.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-[4/3] focus:outline-none"
              onClick={() => handleImageClick(image)}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors text-4xl focus:outline-none"
              aria-label="Close gallery"
            >
              &times;
            </button>
            <div className="relative max-w-6xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] w-auto mx-auto rounded-lg"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
