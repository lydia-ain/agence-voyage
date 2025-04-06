const express = require("express");
const router = express.Router();
const controller = require("../controllers/offres.controller");
const { validerOffre } = require("../middleware/valider.middleware");


// Routes CRUD pour les offres
router.get("/", controller.getAllOffers); // Fonction de récupération de toutes les offres
router.get("/:id", controller.getOfferById); // Fonction pour récupérer une offre par ID
router.post("/", controller.createOffer); // Fonction pour créer une nouvelle offre
router.put("/:id", controller.updateOffer); // Fonction pour mettre à jour une offre
router.delete("/:id", controller.deleteOffer); // Fonction pour supprimer une offre

module.exports = router;
