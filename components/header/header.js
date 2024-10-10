// components/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import NavLink from "./nav-link";
import OpenButtonIcon from "../icons/openButtonIcon";
import CloseButtonIcon from "../icons/closeButtonIcon";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        <Image src="/logo/logo-2.png" alt="Logo" width={50} height={50} />
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
