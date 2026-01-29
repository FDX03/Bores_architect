const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("../frontend"));

/* LOGIN */
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log("LOGIN:", username, password);

  if (username === "fdbortoni" && password === "Fede2001") {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false });
});

/* PROYECTOS */
app.get("/api/projects", (req, res) => {
  db.query("SELECT * FROM projectss", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error al obtener proyectos" });
    }
    res.json(results);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto", PORT);
});
