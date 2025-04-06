const db = require("../config/database");

const getAllReservations = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Reservation", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addReservation = (reservation) => {
  const { id_utilisateur, id_offre, date_reservation, statut } = reservation;

  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO Reservation (id_utilisateur, id_offre, date_reservation, statut) VALUES (?, ?, ?, ?)",
      [id_utilisateur, id_offre, date_reservation, statut],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const updateReservation = (id, reservation) => {
  const { id_utilisateur, id_offre, date_reservation, statut } = reservation;

  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE Reservation SET id_utilisateur=?, id_offre=?, date_reservation=?, statut=? WHERE id=?",
      [id_utilisateur, id_offre, date_reservation, statut, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const deleteReservation = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Reservation WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllReservations,
  addReservation,
  updateReservation,
  deleteReservation,
};
