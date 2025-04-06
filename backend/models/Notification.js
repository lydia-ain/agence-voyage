const db = require("../config/database");

// 🔍 Récupérer toutes les notifications
const getAllNotifications = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Notification", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// ➕ Ajouter une notification
const addNotification = (notification) => {
  const { message, type, destinataire } = notification;

  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO Notification (message, type, destinataire) VALUES (?, ?, ?)",
      [message, type, destinataire],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// 🔄 Modifier une notification
const updateNotification = (id, notification) => {
  const { message, type, destinataire } = notification;

  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE Notification SET message=?, type=?, destinataire=? WHERE id=?",
      [message, type, destinataire, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// ❌ Supprimer une notification
const deleteNotification = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Notification WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllNotifications,
  addNotification,
  updateNotification,
  deleteNotification,
};
