// components/Footer.js
import Link from "next/link";
import classes from "./footer.module.css";
import Image from "next/image";
import FacebookIcon from "../icons/facebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SocialItem from "./social-item";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run the check once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className={classes.footer}>
      {!isMobile && (
        <div className={classes.logoContainer}>
          <Link href="/" className={classes.logo}>
            <Image
              src="/logo-entreprise-fond-transparent.png"
              alt="Contact Icon"
              width={100}
              height={100}
            />
          </Link>
          <span>
            BPI société spécialisée dans les projets de rénovation globale.
            Experts en construction et rénovation d'appartements, maisons,
            bureaux.
          </span>
        </div>
      )}

      {/* footer menu */}
      <nav className={classes.footerNav}>
        <Link href="/devis">Devis</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/entreprise">L'entreprise</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <ul className={classes.socialLinks}>
        <SocialItem
          link="https://www.facebook.com"
          icon={FacebookIcon}
        ></SocialItem>
        <SocialItem
          link="https://www.instagram.com"
          icon={InstagramIcon}
        ></SocialItem>
      </ul>

      {/* privacy policy */}
      <div className={classes.privacyPolicy}>
        <ul>
          <li>
            <Link href="/mentions" className={classes.linkPrivacy}>
              Mentions Légales | Politique de Confidentialité
            </Link>
          </li>
        </ul>
      </div>

      <hr />
      {/* copyright */}
      <div className={classes.footerDown}>
        <h4>© 2024 BPI Experts en construction et rénovation</h4>
      </div>

      {/* floating contact link */}
      <Link href="/contact" className={classes.floatingButton}>
        <Image
          src="/logo-entreprise.webp"
          alt="Contact Icon"
          width={30}
          height={30}
          className={classes.Image}
        />
        <span>Nous contacter</span>
      </Link>
    </footer>
  );
}
