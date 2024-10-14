import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import NavLink from "./nav-link";
import OpenButtonIcon from "../icons/openButtonIcon";
import CloseButtonIcon from "../icons/closeButtonIcon";
import { useRouter } from "next/router";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  // Fermer le menu lors du changement de page
  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false); // Ferme le menu lors du changement de route
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Detect if the user has scrolled and apply floating effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the screen width is mobile size or not
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Ensure menu is closed on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run the check once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen((prevState) => !prevState);
    }
  };

  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.scrolled : ""}`}
    >
      <Link href="/" className={classes.logo}>
        <img src="/logo-entreprise-fond-transparent.png" alt="Logo" />
        <p>
          <span className={classes.cursive}>Construction et</span>
          <br />
          <span className={classes.decorative}>RÉNOVATION</span>
        </p>
      </Link>

      {isMobile && (
        <div className={classes.icons} onClick={toggleMenu}>
          {menuOpen ? (
            <span className={classes.icon}>
              <CloseButtonIcon />
            </span>
          ) : (
            <span className={classes.icon}>
              <OpenButtonIcon />
            </span>
          )}
        </div>
      )}

      <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
        <ul className={classes.navLinks}>
          <li>
            <NavLink href="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink href="/projets">Nos Projets</NavLink>
          </li>
          <li>
            <NavLink href="/devis">Devis</NavLink>
          </li>

          <li>
            <NavLink href="/entreprise">L'entreprise</NavLink>
          </li>
          <li>
            <NavLink href="/avis-clients">Avis Clients</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
