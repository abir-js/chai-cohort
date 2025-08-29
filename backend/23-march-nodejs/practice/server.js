const myExpress = require("./myExpress")

const app = myExpress()

app.get("/", (req, res) => res.end("home"))

app.listen(8000, ()=> console.log("Listening on port 8000"))