const mongoose = require("mongoose");

const labelsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model(
  "Labels",     // nombre del modelo
  labelsSchema,
  "projects"    // colección real en MongoDB
);
