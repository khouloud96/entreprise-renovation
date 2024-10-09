import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContactPage from "../components/contact/contact-page";
import { Fragment } from "react";
import Head from "next/head";

function Contact({ frontmatter }) {
  return (
    <Fragment>
      <Head>
        <title>Nous Contacter</title>
        <meta
          name="description"
          content="Vous souhaitez obtenir des informations sur nos prestations, des conseils en matière de rénovation ou un devis pour des travaux? Nous sommes à votre service!"
        />
      </Head>
      <ContactPage content={frontmatter} />
    </Fragment>
  );
}

export default Contact;

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "content", "contact.md");
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
