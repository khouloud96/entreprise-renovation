import fs from "fs";
import path from "path";
import Head from "next/head";
import { Fragment } from "react";
import ProjetsContent from "../../components/realisations/projets-content";

function Projets(props) {
  return (
    <Fragment>
      <Head>
        <title>Nos projets</title>
        <meta
          name="description"
          content="Un aperçu de nos plus beaux chantiers. Rénovation et décoration d'appartements et bureaux. Découvrez les dernières réalisations de BPI, entreprise générale de bâtiment. Que vous soyez un particulier ou un professionnel, BPI vous accompagnera dans votre projet de rénovation."
        />
      </Head>
      <ProjetsContent projects={props.projects} />
    </Fragment>
  );
}

export default Projets;

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), "/public/projets");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  return {
    props: {
      projects: imageFilenames,
    },
  };
}
