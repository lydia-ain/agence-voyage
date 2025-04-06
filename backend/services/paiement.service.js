const db = require("../config/database");

const getAllPaiements = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Paiement", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getPaiementById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Paiement WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

const addPaiement = (paiement) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO Paiement SET ?", [paiement], (err, results) => {
      if (err) reject(err);
      else resolve(results.insertId);
    });
  });
};

const updatePaiement = (id, paiement) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE Paiement SET ? WHERE id = ?", [paiement, id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const deletePaiement = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Paiement WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  getAllPaiements,
  getPaiementById,
  addPaiement,
  updatePaiement,
  deletePaiement,
};
