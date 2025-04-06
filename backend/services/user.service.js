const db = require("../config/database");

// 🔍 Get all users
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Utilisateur", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// 🔍 Get user by ID
const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM Utilisateur WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

// ➕ Add user
const addUser = (userData) => {
  return new Promise((resolve, reject) => {
    const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = userData;
    db.query(
      "INSERT INTO Utilisateur (nom, prenom, email, adresse, age, date_naissance, numero_tel, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nom, prenom, email, adresse, age, date_naissance, numero_tel, role],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

// ✏️ Update user
const updateUser = (id, userData) => {
  return new Promise((resolve, reject) => {
    const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = userData;
    db.query(
      "UPDATE Utilisateur SET nom = ?, prenom = ?, email = ?, adresse = ?, age = ?, date_naissance = ?, numero_tel = ?, role = ? WHERE id = ?",
      [nom, prenom, email, adresse, age, date_naissance, numero_tel, role, id],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

// ❌ Delete user
const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM Utilisateur WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
