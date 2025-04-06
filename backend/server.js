const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// 📦 Import du middleware logger
const logger = require("./middleware/logger.middleware"); // ➔ Déplace cette ligne ici

// 📦 Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(logger); // ⬅️ Utiliser le middleware logger après l'importation

// 📁 Import des routes
const userRoutes = require("./routes/users.routes");
const offreRoutes = require("./routes/offres.routes");
const reservationRoutes = require("./routes/reservations.routes");
const notificationRoutes = require("./routes/notifications.routes");
const paiementRoutes = require("./routes/paiement.routes");

// 🔗 Utilisation des routes
app.use("/api/users", userRoutes);
app.use("/api/offres", offreRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/paiements", paiementRoutes);

// ✅ Route de test
app.get("/", (req, res) => {
  res.send("✅ Backend opérationnel !");
});

// 🧯 Gestion des erreurs (à la fin)
const errorHandler = require("./middleware/error.middleware");
app.use(errorHandler);

// 🚀 Lancement du serveur
app.listen(port, () => {
  console.log(`✅ Serveur backend lancé sur http://localhost:${port}`);
});
