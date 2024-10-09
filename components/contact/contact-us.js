import Image from "next/image";
import classes from "./contact-us.module.css";
import Link from "next/link";

function ContactUs() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/logo.png"
          alt="Contact us"
          width={300}
          height={300}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <h2>Vous avez un projet de travaux ?</h2>
        <p>Nous vous aidons à le réaliser !</p>

        <div className={classes.buttonContainer}>
          <p className={classes.button}>
            <Link href="/contact">Nous contacter</Link>
          </p>
          <Link href="/devis" className={classes.buttonLink}>
            Demandez un devis
            <Image
              src="/icons/arrow-right.svg"
              width={18}
              height={14}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
