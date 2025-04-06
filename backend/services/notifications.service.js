const db = require("../config/database");

const getAllNotifications = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Notification", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getNotificationById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Notification WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const addNotification = (notification) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO Notification SET ?", [notification], (err, results) => {
      if (err) reject(err);
      else resolve(results.insertId);
    });
  });
};

const updateNotification = (id, notification) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE Notification SET ? WHERE id = ?", [notification, id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const deleteNotification = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Notification WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  getAllNotifications,
  getNotificationById,
  addNotification,
  updateNotification,
  deleteNotification,
};
