const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Our Team
app.get("/team", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "team.html"));
});

// Classes
app.get("/classes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "classes.html"));
});

// Support
app.get("/support", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "support.html"));
});

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
    console.log(`✅ ActiveCentres website running on http://localhost:${PORT}`);
});
