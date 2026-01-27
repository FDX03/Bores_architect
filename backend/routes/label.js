const express = require("express");
const router = express.Router();

// 👇 modelo en plural
const Labels = require("../models/Labels");

// GET todos los proyectos
router.get("/", async (req, res) => {
  try {
    const projects = await Labels.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
});

// POST nuevo proyecto
router.post("/", async (req, res) => {
  try {
    const project = new Labels(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: "Error al crear proyecto" });
  }
});

module.exports = router;
