const db = require("../config/database");

// 📩 Créer une notification
const createNotification = (req, res) => {
  const { email_dest, num_tel, id_user } = req.body;

  const sql = "INSERT INTO notification (email_dest, num_tel, id_user) VALUES (?, ?, ?)";
  db.query(sql, [email_dest, num_tel, id_user], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout de la notification :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    res.status(201).json({ message: "Notification ajoutée avec succès.", id: result.insertId });
  });
};

// 📬 Récupérer toutes les notifications
const getAllNotifications = (req, res) => {
  const sql = "SELECT * FROM notification ORDER BY id_notif DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des notifications :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    res.status(200).json(results);
  });
};

// 🔔 Récupérer une notification par ID
const getNotificationById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM notification WHERE id_notif = ?", [id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération de la notification :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Notification introuvable." });
    }
    res.status(200).json(result[0]);
  });
};

// 🗑️ Supprimer une notification
const deleteNotification = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM notification WHERE id_notif = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression de la notification :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Notification introuvable." });
    }
    res.status(200).json({ message: "Notification supprimée avec succès." });
  });
};

// 📝 Mettre à jour une notification
const updateNotification = (req, res) => {
  const id = req.params.id;
  const { email_dest, num_tel, id_user } = req.body;

  const sql = "UPDATE notification SET email_dest = ?, num_tel = ?, id_user = ? WHERE id_notif = ?";
  db.query(sql, [email_dest, num_tel, id_user, id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour de la notification :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Notification introuvable." });
    }
    res.status(200).json({ message: "Notification mise à jour avec succès." });
  });
};

module.exports = {
  createNotification,
  getAllNotifications,
  getNotificationById,
  deleteNotification,
  updateNotification
};
