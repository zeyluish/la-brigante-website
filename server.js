import express from "express";

const app = express();
const PORT = 3000;

// Sert les fichiers statiques du dossier 'public'
app.use(express.static("public"));

// Middleware JSON
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
