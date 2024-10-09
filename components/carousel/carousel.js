import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import classes from "./carousel.module.css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
// Import the Swiper navigation plugin
SwiperCore.use([Navigation]);

function Carousel1() {
  const swiperRef = useRef(null); // Reference to Swiper instance

  // Handle next slide
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Handle previous slide
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const images = [
    {
      id: 1,
      title: "image 1",
      image: "/images/construction-immeuble.webp",
    },
    {
      id: 2,
      title: "image 2",
      image: "/images/construction.jpg",
    },
    {
      id: 3,
      title: "image 3",
      image: "/images/construction-immeuble-et-petit-collectif.jpg",
    },
    {
      id: 4,
      title: "image 4",
      image: "/images/construction-lyon.jpg",
    },
    {
      id: 5,
      title: "image 5",
      image: "/images/Grenoble-ALPES-JARDIN.jpg",
    },
  ];

  return (
    <div className={classes.sliderWrapper}>
      <button className={classes.arrowLeft} onClick={handlePrevSlide}>
        &#10094;
      </button>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        ref={swiperRef}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className={classes.card}>
              <Image
                src={img.image}
                alt={img.title}
                width={300}
                height={300}
                className={classes.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={classes.arrowRight} onClick={handleNextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel1;
