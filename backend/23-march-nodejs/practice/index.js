const express = require("express");
const http = require("http");

const handlerFunctionV2 = express();

handlerFunctionV2.get("/", (req, res) => res.end("Home page"));
handlerFunctionV2.get("/contact-us", (req, res) => res.end("Contact us page"));
handlerFunctionV2.get("/about-us", (req, res) => res.end("About us page"));

function handlerFunction(req, res) {
  //   console.log("Incoming request");
  //   console.log(req.method);
  //   console.log(req.url);
  //   res.end("Ye lo response");

  switch (req.method) {
    case "GET":
      {
        if (req.url === "/") return res.end("Home Page");
        if (req.url === "/contact") return res.end("Contact Page");
        if (req.url === "/about") return res.end("About Page");
      }
      break;
    case "POST":
      {
      }
      break;

    default:
      break;
  }
}

const server = http.createServer(handlerFunctionV2);

server.listen(8000, () => console.log("listening on port 8000"));
