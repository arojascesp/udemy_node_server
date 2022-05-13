require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Ari Rojas",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "generic",
    titulo: "wena ctm",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "Elementos",
    descripcion: "no se de que esta hecha la pagina la verdad",
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
