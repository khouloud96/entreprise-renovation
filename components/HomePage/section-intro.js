import Link from "next/link";
import classes from "./section-intro.module.css";
import Image from "next/image";

function SectionIntro() {
  return (
    <section className={classes.sectionIntro}>
      <div className={classes.backgroundImages}></div> {/* Classe correcte */}
      <header
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h1>BPI vous souhaite la bienvenue !</h1>
      </header>
      <div className={classes.logoContainer}>
        <Image
          src="/logo-entreprise-fond-transparent.png"
          width={200}
          height={200}
          alt="logo"
          className={classes.logo}
        />
      </div>
      <div
        className={classes.linksWrapper}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <Link className={classes.link} href="/devis">
          Devis
        </Link>
        <Link className={classes.link} href="/projets">
          Nos Projets
        </Link>
        <Link className={classes.link} href="/entreprise">
          L'entreprise
        </Link>
        <Link className={classes.link} href="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}

export default SectionIntro;
