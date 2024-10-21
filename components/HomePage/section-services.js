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
                src="/icons/ico_pencil.png"
                width={70}
                height={70}
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
                src="/icons/ico_peinture.png"
                width={70}
                height={70}
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
                src="/icons/ico_marteau.png"
                width={70}
                height={70}
                alt="check"
              />
            </div>
            <h3>{content.service3}</h3>
            <ReactMarkdown>{content.description3}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPhotos;
