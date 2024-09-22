const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("node:path");
const fs = require("node:fs");
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



// Handle js, css, and asset routes.
app.get(["/js/*", "/css/*", "/assets/*"], (req, res, next) => {
    let requestPath = req.path;
    
    // Remove a trailing '/' if it is there.
    if (requestPath.slice(-1) === "/") {
        requestPath = requestPath.slice(0, -1);
    }
    
    let filePath = path.join(__dirname, "views/"+requestPath);
    
    // If path is for a css file, but an extension is not given then we add the .css ourselves.
    if (requestPath.startsWith("/css") && !filePath.endsWith(".css")) {
        filePath += ".css";
    }

    // Do the same for JavaScript files.
    if (requestPath.startsWith("/js") && !filePath.endsWith(".js")) {
        filePath += ".js";
    }
    
    const pathIsAsset = req.path.startsWith("/assets");

    // "Go next" if the file doesn't exist, or if it does not end with .css or .js (only for /css & /js) - Prevents us from sending non js or css files that may be in the directory.
    if (!fs.existsSync(filePath) || (!pathIsAsset && (!filePath.endsWith(".css") && !filePath.endsWith(".js")))) {
        next();
        return;
    }
    
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Website listening on port ${PORT}`);
});