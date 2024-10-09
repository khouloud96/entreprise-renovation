import classes from "./section-photos.module.css";
import Carousel from "../carousel/carousel";

function SectionPhotos() {
  return (
    <section
      className={classes.section}
      data-aos="zoom-up"
      data-aos-duration="1000"
      data-aos-delay="500"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <div className={classes.photosContainer}>
        <h2 className={classes.carouselTitle}>Nos dernières réalisations</h2>
        <div className={classes.CarouselContainer}>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default SectionPhotos;
