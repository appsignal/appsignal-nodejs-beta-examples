import { Appsignal } from "@appsignal/nodejs";

new Appsignal({
  active: true,
  name: "Your app name",
  pushApiKey: "YOUR-PUSH-API-KEY"
});
