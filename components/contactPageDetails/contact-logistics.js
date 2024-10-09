import LogisticsItem from "./logistics-item";
import classes from "./contact-logistics.module.css";
import PhoneIcon from "../icons/phoneIcon";
import AddressIcon from "../icons/addressIcon";
import MailIcon from "../icons/mailIcon";

function ContactLogistics(props) {
  const { phone, email, address } = props;

  return (
    <section className={classes.logistics}>
      <ul className={classes.list}>
        <LogisticsItem icon={PhoneIcon}>
          <p>{phone}</p>
        </LogisticsItem>
        <LogisticsItem icon={MailIcon}>
          <p>{email}</p>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <p>{address}</p>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default ContactLogistics;
