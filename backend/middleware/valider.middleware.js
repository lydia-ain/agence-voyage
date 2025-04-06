const { body, validationResult } = require('express-validator');

// 🧍‍♂️ Valider utilisateur
const validerUtilisateur = [
  body("email").isEmail().withMessage("Email invalide"),
  body("mot_de_passe").isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erreurs: errors.array() });
    }
    next();
  }
];

// 🛫 Valider offre
const validerOffre = [
  body("type").notEmpty().withMessage("Le type d'offre est requis"),
  body("prix").isNumeric().withMessage("Le prix doit être un nombre"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erreurs: errors.array() });
    }
    next();
  }
];

// 📆 Valider réservation
const validerReservation = [
  body("id_utilisateur").isInt().withMessage("ID utilisateur invalide"),
  body("id_offre").isInt().withMessage("ID offre invalide"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erreurs: errors.array() });
    }
    next();
  }
];

// 🔔 Valider notification
const validerNotification = [
  body("message").notEmpty().withMessage("Le message est requis"),
  body("type").notEmpty().withMessage("Le type est requis"),
  body("destinataire").notEmpty().withMessage("Le destinataire est requis"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erreurs: errors.array() });
    }
    next();
  }
];

// 💳 Valider paiement
const validerPaiement = [
  body("montant").isFloat({ gt: 0 }).withMessage("Le montant doit être supérieur à zéro"),
  body("methode").notEmpty().withMessage("La méthode de paiement est requise"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erreurs: errors.array() });
    }
    next();
  }
];

module.exports = {
  validerUtilisateur,
  validerOffre,
  validerReservation,
  validerNotification,
  validerPaiement
};
