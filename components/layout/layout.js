import { Fragment, useContext } from "react";
import ContactUs from "../contact/contact-us";
import Footer from "../footer/footer";
import Header from "../header/header";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default Layout;
