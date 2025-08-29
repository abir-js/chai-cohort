const http = require("http");

function myExpress() {
  const routes = {
    GET: {},
    POST: {},
  };

  const app = (req, res) => {
    const method = req.method;
    const url = req.url;
    const handler = routes[method]?.[url];

    if (handler) {
      if (method === "POST") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
          req.body = body;
          handler(req, res);
        });
      } else {
        handler(req, res);
      }
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  };

  app.get = (path, handler) => {
    routes.GET[path] = handler;
  };

  app.post = (path, handler) => {
    routes.POST[path] = handler;
  };

  app.listen = (port, cb) => {
    const server = http.createServer(app);
    server.listen(port, cb);
  };

  return app;
}

module.exports = myExpress;
