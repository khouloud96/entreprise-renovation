import { Fragment } from "react";
import ContactSummary from "../contactPageDetails/contact-summary";
import ContactLogistics from "../contactPageDetails/contact-logistics";
import ContactContent from "../contactPageDetails/contact-content";

function ContactPage({ content }) {
  return (
    <Fragment>
      <ContactSummary
        title={content.title}
        description={content.info.description}
      />
      <ContactLogistics
        phone={content.info.phone}
        email={content.info.email}
        address={content.info.address}
      />
      <ContactContent />
    </Fragment>
  );
}

export default ContactPage;
