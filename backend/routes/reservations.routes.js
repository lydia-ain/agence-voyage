const express = require("express");
const router = express.Router();
const controller = require("../controllers/reservations.controller");
const { validerReservation } = require("../middleware/valider.middleware");


// Routes CRUD réservations
router.get("/", controller.getAllReservations); // Appel du contrôleur pour obtenir toutes les réservations
router.get("/:id", controller.getReservationById); // Appel du contrôleur pour obtenir une réservation par ID
router.post("/", controller.createReservation); // Appel du contrôleur pour créer une nouvelle réservation
router.put("/:id", controller.updateReservation); // Appel du contrôleur pour mettre à jour une réservation
router.delete("/:id", controller.deleteReservation); // Appel du contrôleur pour supprimer une réservation

module.exports = router;
