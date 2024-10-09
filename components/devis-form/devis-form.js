import { useContext, useState } from "react";

import classes from "./devis-form.module.css";
import NotificationContext from "../../store/notification-context";
import Button from "../ui/button";

function DevisForm() {
  const notificationCtx = useContext(NotificationContext);

  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    lastName: false,
    phone: false,
    email: false,
    address: false,
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

  function handleFormSubmit(e) {
    e.preventDefault();

    notificationCtx.showNotification({
      title: "Obtenir un devis en cours...",
      message: "Envoi en cours...",
      status: "pending",
    });

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        if (response.ok) {
          setFormValues({
            name: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            comment: "",
          });
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
  }

  return (
    <div className={classes.contactContainer}>
      <header className={classes.header}>
        <h1
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Obtenir un <span className={classes.highlight}>Devis</span>
        </h1>
        <p
          data-aos="zoom-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
        >
          Laissez nous les détails de votre projet, nous vous contacterons pour
          une visite de chantier et pour plus de détails nécessaires à votre
          estimation.
        </p>
      </header>
      <div className={classes.formContainer}>
        <form className={classes.contactForm} onSubmit={handleFormSubmit}>
          <h1>Formulaire de Devis</h1>
          <p>(gratuit et sans engagement)</p>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
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
              Prénom
            </label>
          </div>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="lastName"
              className={
                formValues.lastName || formValues.isFocused?.lastName
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Nom de famille
            </label>
          </div>
          <div className={classes.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="phone"
              className={
                formValues.phone || formValues.isFocused?.phone
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Téléphone
            </label>
          </div>
          <div className={classes.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
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
              type="text"
              id="address"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="address"
              className={
                formValues.address || formValues.isFocused?.address
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Adresse des travaux
            </label>
          </div>
          <div className={classes.formGroup}>
            <textarea
              id="comment"
              name="comment"
              value={formValues.comment}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label
              htmlFor="comment"
              className={
                formValues.comment || formValues.isFocused?.comment
                  ? `${classes.label} ${classes.filled}`
                  : classes.label
              }
            >
              Commentaires
            </label>
          </div>
          <div className={classes.formGroup}>
            <Button>Envoyer</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DevisForm;
