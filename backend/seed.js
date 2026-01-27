const mongoose = require("mongoose");
require("dotenv").config();
const Labels = require("./models/Labels");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Conectado a MongoDB");

    await Labels.insertMany([
      {
        title: "Vivienda Unifamiliar",
        description: "Proyecto residencial contemporáneo con enfoque bioclimático.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        category: "Residencial"
      },
      {
        title: "Edificio Corporativo",
        description: "Arquitectura corporativa sobria y funcional.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        category: "Corporativo"
      }
    ]);

    console.log("✅ Proyectos creados");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
