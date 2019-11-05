// This creates a new Express server.
const express = require("express");
const app = express();
const path = require("path");

// Tells our server to load the static build folder in production.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Tells the server which potrt to run on.
const port = process.env.PORT || 5000;

// Sets up a basic route so that we can render some information on our page.
app.get("/", (req, res) => res.send("Coco Puffs"));

// Tells Express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));

