const db = require("../config/database");

const getAllOffers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Offre", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addOffer = (offer) => {
  const {
    type, titre, description, prix, date_debut, date_fin, destination
  } = offer;

  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO Offre (type, titre, description, prix, date_debut, date_fin, destination) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [type, titre, description, prix, date_debut, date_fin, destination],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const updateOffer = (id, offer) => {
  const {
    type, titre, description, prix, date_debut, date_fin, destination
  } = offer;

  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE Offre SET type=?, titre=?, description=?, prix=?, date_debut=?, date_fin=?, destination=? WHERE id=?",
      [type, titre, description, prix, date_debut, date_fin, destination, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const deleteOffer = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Offre WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllOffers,
  addOffer,
  updateOffer,
  deleteOffer
  
};
