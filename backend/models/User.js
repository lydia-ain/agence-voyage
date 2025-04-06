const db = require("../config/database");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Utilisateur", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addUser = (user) => {
  const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = user;
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO Utilisateur (nom, prenom, email, adresse, age, date_naissance, numero_tel, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nom, prenom, email, adresse, age, date_naissance, numero_tel, role],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const updateUser = (id, user) => {
  const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = user;
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE Utilisateur SET nom=?, prenom=?, email=?, adresse=?, age=?, date_naissance=?, numero_tel=?, role=? WHERE id=?",
      [nom, prenom, email, adresse, age, date_naissance, numero_tel, role, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Utilisateur WHERE id=?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
