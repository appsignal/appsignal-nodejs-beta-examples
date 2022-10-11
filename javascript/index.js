const { Appsignal, expressErrorHandler } = require("@appsignal/nodejs")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send(`
    <h1>OpenTelemetry example app</h1>
    <ul>
      <li><a href="/error">Trigger error</a></li>
    </ul>
  `)
})

app.get("/error", (req, res) => {
  throw new Error("This is a test error")
})

app.use(expressErrorHandler())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
