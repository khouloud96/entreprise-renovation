import { sendContactEmail } from "../../lib/nodeMailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, comment } = req.body;

    // Validation on server side
    if (
      !name ||
      name.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !subject ||
      subject.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    try {
      await sendContactEmail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `${name} vient de vous contacter`,
        templateData: {
          name: `${name}`,
          email,
          subject,
          comment,
          subject: `Formulaire de contact de ${name}`,
        },
      });

      res.status(200).json({ message: "L'email a été envoyé avec succès." });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.status(405).json({ message: "Methode n'est pas possible" });
  }
}
