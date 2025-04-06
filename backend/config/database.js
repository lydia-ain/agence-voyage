const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // change si tu as mis un mot de passe
  database: "agence_voyage"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à la base de données :", err);
  } else {
    console.log("✅ Connecté à la base de données MySQL");
  }
});

module.exports = db;
