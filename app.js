const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("node:path");
const config = require("./config.json");
const PORT = config.websitePort || 3000;

// body-parser will be useful for parsing body inforamtion in POST requests. Ejs will be helpful if we need to render server variables on page load.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("html", require('ejs').renderFile);
app.set("view-engine", "html");

app.set("views", path.join(__dirname, "/public"));

// -- Main routes --
app.get("/", (req, res) => {
    res.render("index.html");
});


app.listen(PORT, () => {
    console.log(`Website listening on port ${PORT}`);
});