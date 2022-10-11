import { Appsignal, expressErrorHandler } from "@appsignal/nodejs";
import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
  res.send(`
    <h1>OpenTelemetry example app</h1>
    <ul>
      <li><a href="/error">Trigger error</a></li>
    </ul>
  `)
})

app.get("/error", (req: any, res: any) => {
  throw new Error("This is a test error")
})

app.use(expressErrorHandler())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
