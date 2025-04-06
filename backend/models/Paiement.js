const db = require("../config/database");

// 🔍 Récupérer tous les paiements
const getAllPaiements = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Paiement", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// ➕ Ajouter un paiement
const addPaiement = (paiement) => {
  const { id_reservation, montant, methode_paiement, date_paiement } = paiement;

  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO Paiement (id_reservation, montant, methode_paiement, date_paiement) VALUES (?, ?, ?, ?)",
      [id_reservation, montant, methode_paiement, date_paiement],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// 🔄 Modifier un paiement
const updatePaiement = (id, paiement) => {
  const { id_reservation, montant, methode_paiement, date_paiement } = paiement;

  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE Paiement SET id_reservation=?, montant=?, methode_paiement=?, date_paiement=? WHERE id=?",
      [id_reservation, montant, methode_paiement, date_paiement, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// ❌ Supprimer un paiement
const deletePaiement = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Paiement WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllPaiements,
  addPaiement,
  updatePaiement,
  deletePaiement,
};
