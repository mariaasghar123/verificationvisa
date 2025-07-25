import React, { useState, useEffect } from "react";
import "./Herocrousel.css";

export default function HeroCarousel() {
  const images = [
    {
      src: "/media/images/carousel-1.jpg",
      subtext: "WELCOME TO VISA CONSULTING AGENCY",
      heading: "Since 1987 We are experts in Global Industry",
    },
    {
      src: "/media/images/carousel-2.jpg",
      subtext: "TRAVELS IMIGRATION & VISA.",
      heading: "World Most Briliant Consultancy & Company",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // only move forward (loop to start after last)
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-image" key={index}>
            <img src={image.src} alt={`Slide ${index}`} />
            <div className="carousel-content">
              <h5>{image.subtext}</h5>
              <h1>{image.heading}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="carousel-arrow left" onClick={goToNext}>
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
