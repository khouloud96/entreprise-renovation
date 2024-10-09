import SectionPhotos from "../components/HomePage/section-photos";
import SectionIntro from "../components/HomePage/section-intro";
import SectionServices from "../components/HomePage/section-services";
import { Fragment } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function PageHome({ frontmatter }) {
  return (
    <Fragment>
      <Head>
        <title>BPI Site</title>
        <meta
          name="description"
          content="BPI est une entreprise générale de bâtiment tous corps d'état. BPI vous accompagne dans la réalisation de vos projets de rénovation. Pour vous garantir un travail soigné et réalisé dans les règles de l'art, nous nous entourons de professionnels et artisans qualifiés (plombiers, peintres, maçons, menuisiers qualifiés et électricien qualifié avec habilitation et connaissance parfaite)"
        />
      </Head>
      <SectionIntro />
      <SectionPhotos />
      <SectionServices content={frontmatter} />
    </Fragment>
  );
}

export default PageHome;

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "content", "services.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data: frontmatter } = matter(fileContent);

    if (!frontmatter || Object.keys(frontmatter).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        frontmatter,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier Markdown:", error);
    return {
      notFound: true,
    };
  }
}
