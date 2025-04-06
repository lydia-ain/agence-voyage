const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller");
const { validerUtilisateur } = require("../middleware/valider.middleware");

// Routes CRUD utilisateurs
router.get("/", controller.getAllUsers); // Cette route doit appeler un contrôleur
router.get("/:id", controller.getUserById); // Même pour cette route
router.post("/", validerUtilisateur, controller.addUser);
router.put("/:id", validerUtilisateur, controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.post("/login", controller.loginUser); 

// ✅ Route de connexion (login)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Test simple - à remplacer par une vraie logique de vérification
  if (email === "admin@fly.com" && password === "1234") {
    return res.status(200).json({ message: "Connexion réussie", token: "fake-jwt-token" });
  }

  res.status(401).json({ message: "Identifiants invalides" });
});

module.exports = router;
