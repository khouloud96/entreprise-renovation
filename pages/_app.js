import "../styles/globals.css";
import "leaflet/dist/leaflet.css";
import Layout from "../components/layout/layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>BPI Site</title>
          <meta
            name="description"
            content="BPI est une entreprise de contruction et de rénovation (appartements, bâtiments, maisons, buraux)"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
