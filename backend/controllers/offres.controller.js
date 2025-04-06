const db = require("../config/database");

// 🔸 Créer une nouvelle offre
const createOffer = (req, res) => {
  const { destination, destination_favoris } = req.body;
  const sql = "INSERT INTO offre (destination, destination_favoris) VALUES (?, ?)";
  db.query(sql, [destination, destination_favoris], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Offre ajoutée avec succès", id: result.insertId });
  });
};

// 🔸 Récupérer toutes les offres
const getAllOffers = (req, res) => {
  db.query("SELECT * FROM offre", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// 🔸 Mettre à jour une offre
const updateOffer = (req, res) => {
  const id = req.params.id;
  const { destination, destination_favoris } = req.body;
  const sql = "UPDATE offre SET destination = ?, destination_favoris = ? WHERE id_offre = ?";
  db.query(sql, [destination, destination_favoris, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Offre modifiée avec succès" });
  });
};

// 🔸 Supprimer une offre
const deleteOffer = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM offre WHERE id_offre = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Offre supprimée avec succès" });
  });
};

// 🔸 Récupérer une offre par ID
const getOfferById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM offre WHERE id_offre = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Offre non trouvée" });
    res.status(200).json(result[0]);
  });
};

module.exports = {
  createOffer,
  getAllOffers,
  updateOffer,
  deleteOffer,
  getOfferById
};
