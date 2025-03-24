const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.end("Home Page"));
app.get("/contact-us", (req, res) => res.end("Contact us Page"));
app.get("/about-us", (req, res) => res.end("About us Page"));

function handlerFunction(req, res) {
  console.log("incoming request aya");

  switch (req.method) {
    case "GET":
      {
        if (req.url === "/") return res.end("Home Page");
        if (req.url === "/contact-us") return res.end("Contact Page");
        if (req.url === "/about-us") return res.end("About Page");
      }
      break;
    case "POST":
      {
      }
      break;
  }

  res.end("Ye lo response");
}

// const server = http.createServer(app);

app.listen(8080, function () {
  console.log("server started");
});

// server.listen(8080, function () {
//   console.log("server started");
// });
