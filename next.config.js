const withTM = require("next-transpile-modules")(["react-leaflet", "leaflet"]);

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return withTM({
      env: {
        EMAIL_USER: "anismiss789@gmail.com",
        EMAIL_PASSWORD: "omvfirifchzhhvgk",
      },
    });
  }

  return withTM({
    env: {
      EMAIL_USER: "anismiss789@gmail.com",
      EMAIL_PASSWORD: "omvfirifchzhhvgk",
    },
  });
};
