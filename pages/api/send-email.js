import { sendEmail, sendEmailConfirm } from "../../lib/nodeMailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastName, email, phone, address, comment } = req.body;

    // Validation on server side
    if (
      !name ||
      name.trim() === "" ||
      !lastName ||
      lastName.trim() === "" ||
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !phone ||
      phone.trim() === "" ||
      !address ||
      address.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    try {
      const firstEmailInfo = await sendEmail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `OBTENIR UN DEVIS pour ${name} ${lastName}`,
        templateData: {
          name: `${name} ${lastName}`,
          email,
          phone,
          address,
          comment,
          subject: `Devis pour ${name} ${lastName}`,
        },
      });

      console.log(
        "Premier email envoyé avec succès : ",
        firstEmailInfo.messageId
      );

      // Envoi du deuxième email
      const secondEmailInfo = await sendEmailConfirm({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Merci pour votre demande de devis, ${name} ${lastName}`,
        templateData: {
          name: `${name} ${lastName}`,
          email,
          phone,
          address,
          comment,
          subject: `Confirmation de votre demande`,
        },
      });

      console.log(
        "Deuxième email envoyé avec succès : ",
        secondEmailInfo.messageId
      );

      res
        .status(200)
        .json({ message: "Les emails ont été envoyés avec succès." });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.status(405).json({ message: "Methode n'est pas possible" });
  }
}
