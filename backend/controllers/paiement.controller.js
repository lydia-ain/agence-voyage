const db = require("../config/database");

// 🔸 Créer un paiement
const createPaiement = (req, res) => {
  const { reservationId, montant, modePaiement, statut } = req.body;

  const sql = `
    INSERT INTO Paiement (reservationId, montant, modePaiement, statut)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [reservationId, montant, modePaiement, statut], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Paiement enregistré", id: result.insertId });
  });
};

// 🔸 Récupérer tous les paiements
const getAllPaiements = (req, res) => {
  db.query("SELECT * FROM Paiement", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// 🔸 Récupérer un paiement par ID
const getPaiementById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Paiement WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Paiement non trouvé" });
    res.status(200).json(result[0]);
  });
};

// 🔸 Mettre à jour un paiement
const updatePaiement = (req, res) => {
  const id = req.params.id;
  const { montant, modePaiement, statut } = req.body;

  const sql = `
    UPDATE Paiement
    SET montant = ?, modePaiement = ?, statut = ?
    WHERE id = ?
  `;

  db.query(sql, [montant, modePaiement, statut, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Paiement non trouvé" });
    res.status(200).json({ message: "Paiement mis à jour" });
  });
};

// 🔸 Supprimer un paiement
const deletePaiement = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Paiement WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Paiement supprimé avec succès" });
  });
};

// Exporter les fonctions
module.exports = {
  createPaiement,
  getAllPaiements,
  getPaiementById,
  updatePaiement,
  deletePaiement
};
