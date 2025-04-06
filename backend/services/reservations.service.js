const db = require("../config/database");

const getAllReservations = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Reservation", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getReservationById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Reservation WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const addReservation = (reservation) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO Reservation SET ?", [reservation], (err, results) => {
      if (err) reject(err);
      else resolve(results.insertId);
    });
  });
};

const updateReservation = (id, reservation) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE Reservation SET ? WHERE id = ?", [reservation, id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const deleteReservation = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Reservation WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  getAllReservations,
  getReservationById,
  addReservation,
  updateReservation,
  deleteReservation,
};
