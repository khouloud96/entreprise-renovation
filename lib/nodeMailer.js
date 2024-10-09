import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Fonction pour lire et compiler le template HTML
const compileTemplate = (templateName, data) => {
  const filePath = path.join(process.cwd(), "templates", templateName);
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  return template(data);
};

export async function sendEmail({ from, to, subject, templateData }) {
  try {
    const htmlTemplate = compileTemplate("emailTemplate.html", templateData);

    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: htmlTemplate,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public", "logo.png"),
          cid: "footerLogo",
        },
      ], // CID (Content-ID) : Attache l'image à l'email via Nodemailer et référence-la dans ton template HTML via cid.
    });
    console.log("Email envoyé: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email: ", error);
    throw error;
  }
}

export async function sendEmailConfirm({ from, to, subject, templateData }) {
  try {
    const htmlTemplate = compileTemplate(
      "emailConfirmTemplate.html",
      templateData
    );

    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: htmlTemplate,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public", "logo.png"),
          cid: "footerLogo",
        },
      ], // CID (Content-ID) : Attache l'image à l'email via Nodemailer et référence-la dans ton template HTML via cid.
    });
    console.log("Email envoyé: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email: ", error);
    throw error;
  }
}

export async function sendContactEmail({ from, to, subject, templateData }) {
  try {
    const htmlTemplate = compileTemplate(
      "emailContactTemplate.html",
      templateData
    );

    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: htmlTemplate,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public", "logo.png"),
          cid: "footerLogo",
        },
      ], // CID (Content-ID) : Attache l'image à l'email via Nodemailer et référence-la dans ton template HTML via cid.
    });
    console.log("Email envoyé: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email: ", error);
    throw error;
  }
}
