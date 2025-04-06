const db = require("../config/database");

// 🔸 Créer une réservation
const createReservation = (req, res) => {
  const { id_user, id_offre, date_reservation, statut } = req.body;
  const sql = `
    INSERT INTO Reservation (date_reservation, statut, id_user, id_offre)
    VALUES (?, ?, ?, ?)
  `;
  db.query(sql, [date_reservation, statut, id_user, id_offre], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Réservation créée avec succès", id: result.insertId });
  });
};

// 🔸 Obtenir toutes les réservations
const getAllReservations = (req, res) => {
  db.query("SELECT * FROM Reservation", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// 🔸 Obtenir une réservation par ID
const getReservationById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Reservation WHERE id_res = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Réservation non trouvée" });
    res.status(200).json(result[0]);
  });
};

// 🔸 Mettre à jour une réservation
const updateReservation = (req, res) => {
  const id = req.params.id;
  const { id_user, id_offre, date_reservation, statut } = req.body;
  const sql = `
    UPDATE Reservation
    SET date_reservation = ?, statut = ?, id_user = ?, id_offre = ?
    WHERE id_res = ?
  `;
  db.query(sql, [date_reservation, statut, id_user, id_offre, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Réservation non trouvée" });
    res.status(200).json({ message: "Réservation mise à jour avec succès" });
  });
};

// 🔸 Supprimer une réservation
const deleteReservation = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Reservation WHERE id_res = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Réservation supprimée avec succès" });
  });
};

module.exports = {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation
};
