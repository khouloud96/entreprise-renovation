import Head from "next/head";
import { Fragment } from "react";
import EnterpriseContent from "../components/entreprise/enterprise-content";

function Entreprise() {
  return (
    <Fragment>
      <Head>
        <title>Notre entreprise BPI</title>
        <meta
          name="description"
          content="BPI est une société spécialisée dans les projets de rénovation globale. Votre spécialiste de la rénovation intérieure et extérieure à Paris et en île de France"
        />
      </Head>
      <EnterpriseContent />
    </Fragment>
  );
}

export default Entreprise;
