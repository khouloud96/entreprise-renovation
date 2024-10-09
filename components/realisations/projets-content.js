import ProjectsList from "./list-projets";
import classes from "./projets-content.module.css";

function ProjetsContent({ projects }) {
  return (
    <div className={classes.ProjetsContainer}>
      <header className={classes.header}>
        <h1
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Nos Projets
        </h1>
        <p
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Un aperçu de nos plus beaux chantiers Rénovation et décoration
          d'appartements et bureaux.
        </p>
      </header>
      <section className={classes.section}>
        <ProjectsList projects={projects} />
      </section>
    </div>
  );
}

export default ProjetsContent;
