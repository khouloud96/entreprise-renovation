import { useContext, useState } from "react";

import classes from "./devis-form.module.css";
import NotificationContext from "../../store/notification-context";
import Button from "../ui/button";
import {
  FaComment,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";

function DevisForm() {
  const notificationCtx = useContext(NotificationContext);

  const [formErrors, setFormErrors] = useState({});

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

    const fieldError = validateField(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number (French format example)
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
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

    const fieldError = validateField(name, formValues[name]);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        return value.trim() ? "" : "Prénom requis";
      case "lastName":
        return value.trim() ? "" : "Nom de famille requis";
      case "phone":
        return validatePhone(value)
          ? ""
          : "Numéro de téléphone invalide (10 chiffres requis)";
      case "email":
        return validateEmail(value) ? "" : "Adresse email invalide";
      case "address":
        return value.trim() ? "" : "Adresse des travaux requise";
      case "comment":
        return value.trim() ? "" : "Veuillez ajouter un commentaire";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formValues).forEach((key) => {
      const error = validateField(key, formValues[key]);
      if (error) {
        errors[key] = error;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
              <FaUser /> Prénom
            </label>
            {formErrors.name && (
              <p className={classes.error}>{formErrors.name}</p>
            )}
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
              <FaUser /> Nom de famille
            </label>
            {formErrors.lastName && (
              <p className={classes.error}>{formErrors.lastName}</p>
            )}
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
              <FaPhone /> Téléphone
            </label>
            {formErrors.phone && (
              <p className={classes.error}>{formErrors.phone}</p>
            )}
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
              <FaEnvelope /> E-mail
            </label>
            {formErrors.email && (
              <p className={classes.error}>{formErrors.email}</p>
            )}
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
              <FaMapMarkerAlt /> Adresse des travaux
            </label>
            {formErrors.address && (
              <p className={classes.error}>{formErrors.address}</p>
            )}
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
              <FaComment /> Commentaires
            </label>
            {formErrors.comment && (
              <p className={classes.error}>{formErrors.comment}</p>
            )}
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
