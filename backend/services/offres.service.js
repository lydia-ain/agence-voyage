const db = require("../config/database");

const getAllOffers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Offre", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getOfferById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Offre WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const addOffer = (offre) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO Offre SET ?", [offre], (err, results) => {
      if (err) reject(err);
      else resolve(results.insertId);
    });
  });
};

const updateOffer = (id, offre) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE Offre SET ? WHERE id = ?", [offre, id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const deleteOffer = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Offre WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  getAllOffers,
  getOfferById,
  addOffer,
  updateOffer,
  deleteOffer
};
