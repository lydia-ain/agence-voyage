const express = require("express");
const router = express.Router();
const paiementController = require("../controllers/paiement.controller");
const { validerNotification } = require("../middleware/valider.middleware");



// Routes pour gérer les paiements
router.post("/", paiementController.createPaiement); // Créer un paiement
router.get("/", paiementController.getAllPaiements); // Récupérer tous les paiements
router.get("/:id", paiementController.getPaiementById); // Récupérer un paiement par ID
router.put("/:id", paiementController.updatePaiement); // Mettre à jour un paiement
router.delete("/:id", paiementController.deletePaiement); // Supprimer un paiement

module.exports = router;

