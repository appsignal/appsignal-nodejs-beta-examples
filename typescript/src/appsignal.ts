import { Appsignal } from "@appsignal/nodejs";

export default new Appsignal({
  active: true,
  name: "Your app name",
  pushApiKey: "YOUR-PUSH-API-KEY"
});
