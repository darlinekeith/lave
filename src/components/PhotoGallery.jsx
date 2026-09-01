import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { HiX } from "react-icons/hi";

import img3Thumbnail from "../assets/gallery/img3-960.webp";
import img5Thumbnail from "../assets/gallery/img5-960.webp";
import img6Thumbnail from "../assets/gallery/img6-960.webp";
import img7Thumbnail from "../assets/gallery/img7-960.webp";
import img8Thumbnail from "../assets/gallery/img8-960.webp";
import img9Thumbnail from "../assets/gallery/img9-960.webp";
import img3Full from "../assets/img3.webp";
import img5Full from "../assets/img5.webp";
import img6Full from "../assets/img6.webp";
import img7Full from "../assets/img7.webp";
import img8Full from "../assets/img8.webp";
import img9Full from "../assets/img9.webp";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const images = [
    { thumbnail: img8Thumbnail, full: img8Full, alt: "Community members gathering" },
    { thumbnail: img3Thumbnail, full: img3Full, alt: "Children participating in activities" },
    { thumbnail: img9Thumbnail, full: img9Full, alt: "Volunteers at work" },
    { thumbnail: img7Thumbnail, full: img7Full, alt: "Educational session in progress" },
    { thumbnail: img5Thumbnail, full: img5Full, alt: "Food distribution event" },
    { thumbnail: img6Thumbnail, full: img6Full, alt: "Healthcare outreach program" }
  ];

  const handleImageClick = (image) => {
    previousFocusRef.current = document.activeElement;
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-lave-mist pb-16 pt-28 sm:pt-32">
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

      <section className="page-container px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Our gallery</p>
          <h1 className="section-title">Moments from our community</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Moments that capture the impact of our work and the joy we share with our community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <button
              key={image.alt}
              className="content-image group relative overflow-hidden bg-slate-200 text-left"
              onClick={() => handleImageClick(image)}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm font-bold text-white">
                  View image
                </span>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-5" role="presentation">
            <div className="relative flex h-full w-full max-w-6xl items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title">
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/50 text-white hover:bg-black/70"
              aria-label="Close gallery"
            >
              <HiX className="h-7 w-7" aria-hidden="true" />
            </button>
            <div className="max-h-full max-w-full pt-12">
              <img
                src={selectedImage.full}
                alt={selectedImage.alt}
                className="max-h-[78vh] max-w-full object-contain"
                decoding="async"
              />
              <p id="gallery-dialog-title" className="mt-4 text-center text-sm font-semibold text-white">{selectedImage.alt}</p>
            </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default PhotoGallery;
