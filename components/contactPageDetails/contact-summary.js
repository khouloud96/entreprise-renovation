import classes from "./contact-summary.module.css";

function ContactSummary(props) {
  const { title, description } = props;

  return (
    <section className={classes.summary}>
      <h1
        data-aos="zoom-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        {title}
      </h1>
      <p
        data-aos="zoom-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        {description}
      </p>
      <p
        data-aos="zoom-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        Nous sommes à votre service!
      </p>
    </section>
  );
}

export default ContactSummary;
