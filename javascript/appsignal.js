const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "Your app name",
  pushApiKey: "YOUR-PUSH-API-KEY"
});

module.exports = appsignal;
