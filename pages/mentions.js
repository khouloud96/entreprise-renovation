import React from "react";
import MentionsLegales from "../components/mentions-legales/MentionsLegales";
import Head from "next/head";

function mentions() {
  return (
    <>
      <Head>
        <title>Mentions Légales | BPI CONSTRUCTION ET RÉNOVATION</title>
        <meta
          name="description"
          content="Page de mentions légales et politique de confidentialité pour le site internet BPI CONSTRUCTION ET RÉNOVATION"
        />
      </Head>
      <div>
        <MentionsLegales />
      </div>
    </>
  );
}

export default mentions;
