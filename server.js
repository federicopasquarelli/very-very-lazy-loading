const express = require("express");
const serveStatic = require("serve-static");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");

const app = express();

app.use("/", expressStaticGzip(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
