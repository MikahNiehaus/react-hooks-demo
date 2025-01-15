const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Default route to test the server
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/data", (req, res) => {
    res.json({ message: "Successfully fetched" });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
