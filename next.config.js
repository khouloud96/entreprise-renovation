const withTM = require("next-transpile-modules")(["react-leaflet", "leaflet"]);

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return withTM({
      env: {
        EMAIL_USER: "anismiss789@gmail.com",
        EMAIL_PASSWORD: "omvfirifchzhhvgk",
        BASE_URL: "http://localhost:3000",
      },
    });
  }

  return withTM({
    env: {
      EMAIL_USER: "anismiss789@gmail.com",
      EMAIL_PASSWORD: "omvfirifchzhhvgk",
      BASE_URL: "https://entreprise-renovation.vercel.app", //BASE_URL: "https://votre-domaine.com",
    },
  });
};
