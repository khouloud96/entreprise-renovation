import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

const images = [
  {
    id: 1,
    alt: "image 1",
    image: "/images/realisation-1.jpg",
  },
  {
    id: 2,
    alt: "image 2",
    image: "/images/realisation-4.jpg",
  },
  {
    id: 6,
    alt: "image 6",
    image: "/images/realisation-5.jpg",
  },
  {
    id: 3,
    alt: "image 3",
    image: "/images/realisation-6.jpg",
  },
  {
    id: 7,
    alt: "image 7",
    image: "/images/salon.jpg",
  },
  {
    id: 4,
    alt: "image 4",
    image: "/images/coin.jpg",
  },
  {
    id: 5,
    alt: "image 5",
    image: "/images/cheminee.jpg",
  },
  {
    id: 8,
    alt: "image 8",
    image: "/images/escalier.jpg",
  },
];

function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
          width={300}
          height={300}
        />
      ))}
    </div>
  );
}

export default ImageSlideshow;
