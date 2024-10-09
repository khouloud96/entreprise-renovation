import Link from "next/link";
import classes from "./page-404.module.css";

function Page404() {
  return (
    <section className={classes.section}>
      <div className={classes.wrapContainer}>
        <div className={classes.container}>
          <span>404</span>
          <h1>Page non trouvée</h1>
          <p>
            Nous sommes désolés, la page que vous recherchez n'existe pas dans
            notre base de données !
          </p>
          <p>
            Allez peut-être sur notre{" "}
            <Link href="/" className={classes.link}>
              page d'accueil
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page404;
