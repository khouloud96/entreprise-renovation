import ImageSlideshow from "../images/image-slideshow";
import classes from "./enterprise-content.module.css";

function EnterpriseContent() {
  return (
    <div className={classes.EnterpriseContainer}>
      <header className={classes.header}>
        <h1
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Entreprise de rénovation
        </h1>
        <p
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Votre spécialiste de la rénovation intérieure et extérieure à Paris et
          en île de France.
        </p>
      </header>
      <section className={classes.section}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>BPI Entreprise de rénovation</h1>
          <p>
            BPI société spécialisée dans les projets de rénovation globale. Nous
            proposons une large palette de services s'étendant du conseil à la
            gestion complète d'opérations, de la conception à la réalisation, et
            aux travaux <strong>“CLE EN MAINS”</strong>.{" "}
          </p>
          <p>
            Rénovation d'appartements, maisons, bureaux. Nous maîtrisons
            l'ensemble des métiers traditionnels de la{" "}
            <strong>rénovation intérieur et extérieur </strong> afin de vous
            proposer <strong>une prestation clés en main </strong> de qualité
            professionnelle : refonte complète de salle de bains et cuisine ,
            restauration de parquet ancien, remplacement de portes et fenêtres ,
            création de nouveaux agencements, pose de cuisine, ainsi que
            l'ensemble des lots usuels du bâtiment tels que plomberie,
            électricité, isolation, rénovation des peinture.{" "}
          </p>
          <p>
            Des professionnels sélectionnés en fonction de la nature de vos
            travaux. Pour vous c'est l'assurance d'avoir la qualité
            professionnelle, et des tarifs très intéressants, voire
            compétitifs..
          </p>
        </div>
      </section>
      <section className={classes.section2}>
        <p>
          Détenant un savoir-faire solide et une vaste expérience, nous
          attachons une grande importance à la <strong>qualité</strong> de nos
          prestations. Nous accordons en effet une attention particulière sur
          les détails, et le suivi de votre projet.
        </p>
        <p>
          Nous vous invitons à demander en ligne un{" "}
          <strong>DEVIS GRATUIT</strong> et personnalisé, nous vous contacterons
          dans les plus brefs délais pour traiter votre demande et pour répondre
          à toutes vos questions.
        </p>
      </section>
    </div>
  );
}

export default EnterpriseContent;
