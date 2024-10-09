import { useContext, useState } from "react";
import classes from "./contact-content.module.css";
import Button from "../ui/button";
import NotificationContext from "../../store/notification-context";
import MyMap from "../map/map";

function ContactContent() {
  const notificationCtx = useContext(NotificationContext);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    comment: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle focus state change
  const handleFocus = (e) => {
    const { name } = e.target;
    setIsFocused({ ...isFocused, [name]: true });
  };

  // Handle blur (when the user leaves the input)
  const handleBlur = (e) => {
    const { name } = e.target;
    setIsFocused({ ...isFocused, [name]: false });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    notificationCtx.showNotification({
      title: "Nous contactez...",
      message: "Envoi en cours...",
      status: "pending",
    });

    fetch("/api/send-contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        if (response.ok) {
          setFormValues({ name: "", email: "", subject: "", comment: "" });
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Succès.",
          message: "Votre message est envoyé!",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Erreur!",
          message:
            "Une erreur s'est produite lors de l'envoi de votre formulaire!",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.content}>
      <MyMap />
      <div className={classes.container}>
        <h1>Formulaire de Contact</h1>

        <form className={classes.contactForm} onSubmit={handleFormSubmit}>
          <div className={classes.formGroup}>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="name"
              className={
                formValues.name || formValues.isFocused?.name
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Nom
            </label>
          </div>
          <div className={classes.formGroup}>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="email"
              className={
                formValues.email || formValues.isFocused?.email
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              E-mail
            </label>
          </div>
          <div className={classes.formGroup}>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="subject"
              className={
                formValues.subject || formValues.isFocused?.subject
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Objet
            </label>
          </div>
          <div className={classes.formGroup}>
            <textarea
              id="comment"
              name="comment"
              rows="7"
              value={formValues.comment}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label
              htmlFor="comment"
              className={
                formValues.comment || formValues.isFocused?.comment
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Votre message
            </label>
          </div>
          <div className={classes.formGroup}>
            <Button>Envoyer</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactContent;
