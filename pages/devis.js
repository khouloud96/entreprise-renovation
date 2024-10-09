import { Fragment } from "react";
import DevisForm from "../components/devis-form/devis-form";
import Head from "next/head";

function Devis() {
  return (
    <Fragment>
      <Head>
        <title>Obtenir un devis</title>
        <meta
          name="description"
          content="Laissez nous les détails de votre projet, nous vous contacterons pour une visite de chantier et pour plus de détails nécessaires à votre estimation."
        />
      </Head>
      <DevisForm />
    </Fragment>
  );
}

export default Devis;
