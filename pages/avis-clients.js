import { Fragment } from "react";
import Head from "next/head";
import { getAvisClients } from "../lib/avis";
import ListAvisClients from "../components/avis-clients/avis-clients";

function AvisClientsPage({ avisClients }) {
  return (
    <Fragment>
      <Head>
        <title>Avis clients</title>
        <meta
          name="description"
          content="Votre avis nous intéresse ! N'hésitez pas à nous contacter pour donner votre avis sur notre travail de rénovation et votre expérience client avec BPI."
        />
      </Head>
      <ListAvisClients avisClients={avisClients} />
    </Fragment>
  );
}

export default AvisClientsPage;

export async function getStaticProps() {
  const avisClients = getAvisClients();

  return {
    props: {
      avisClients,
    },
  };
}
