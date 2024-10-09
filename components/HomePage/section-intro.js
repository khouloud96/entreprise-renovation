import Link from "next/link";
import classes from "./section-intro.module.css";

function SectionIntro() {
  return (
    <section className={classes.sectionIntro}>
      <header
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <h1>BPI vous souhaite la bienvenue !</h1>
      </header>
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
          Nos Projet
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
