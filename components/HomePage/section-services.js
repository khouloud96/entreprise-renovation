import Link from "next/link";
import classes from "./section-services.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

function SectionPhotos({ content }) {
  const customsRenderers = {
    link({ children, href }) {
      return <Link href={href}>{children}</Link>;
    },
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
    >
      <div className={classes.container}>
        <h2>Nos services</h2>
        <div className={classes.boxes}>
          <div
            className={classes.serviceBox}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <div className={classes.icon}>
              <Image
                src="/icons/check-solid.svg"
                width={18}
                height={18}
                alt="check"
              />
            </div>
            <h3>{content.service1}</h3>
            <ReactMarkdown components={customsRenderers}>
              {content.description1}
            </ReactMarkdown>
          </div>

          <div
            className={classes.serviceBox}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <div className={classes.icon}>
              <Image
                src="/icons/check-solid.svg"
                width={18}
                height={18}
                alt="check"
              />
            </div>
            <h3>{content.service2}</h3>
            <ReactMarkdown>{content.description2}</ReactMarkdown>
          </div>

          <div
            className={classes.serviceBox}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <div className={classes.icon}>
              <Image
                src="/icons/check-solid.svg"
                width={18}
                height={18}
                alt="check"
              />
            </div>
            <h3>{content.service3}</h3>
            <p>{content.description3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPhotos;
