import React, { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie-consent="));
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    document.cookie = `cookie-consent=true; expires=${expirationDate.toUTCString()}; path=/`;
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        Ce site utilise des cookies pour vous offrir de meilleurs services. En
        poursuivant votre navigation, vous en acceptez l'utilisation.{" "}
        <a href="/cookies-policy" className={styles.link}>
          en savoir plus
        </a>
      </p>
      <button onClick={acceptCookies} className={styles.button}>
        Accepter
      </button>
    </div>
  );
};

export default CookieBanner;