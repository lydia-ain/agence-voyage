// controllers/user.controller.js
const db = require("../config/database");

// 🔹 Récupérer tous les utilisateurs
const getAllUsers = (req, res) => {
  db.query("SELECT * FROM Utilisateur", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// 🔹 Ajouter un utilisateur
const addUser = (req, res) => {
  const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = req.body;
  
  // Vérification des champs requis
  if (!nom || !prenom || !email) {
    return res.status(400).json({ error: "Nom, prénom et email sont requis" });
  }

  db.query(
    "INSERT INTO Utilisateur (nom, prenom, email, adresse, age, date_naissance, numero_tel, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [nom, prenom, email, adresse, age, date_naissance, numero_tel, role],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Utilisateur ajouté avec succès", id: results.insertId });
    }
  );
};


// 🔹 Connexion utilisateur (simplifiée)
const loginUser = (req, res) => {
  const { email } = req.body;
  db.query("SELECT * FROM Utilisateur WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(401).json({ error: "Utilisateur non trouvé" });
    res.json({ message: "Connexion réussie", user: results[0] });
  });
};

// 🔹 Mettre à jour un utilisateur
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nom, prenom, email, adresse, age, date_naissance, numero_tel, role } = req.body;
  db.query(
    "UPDATE Utilisateur SET nom=?, prenom=?, email=?, adresse=?, age=?, date_naissance=?, numero_tel=?, role=? WHERE id=?",
    [nom, prenom, email, adresse, age, date_naissance, numero_tel, role, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Utilisateur mis à jour avec succès" });
    }
  );
};

// 🔹 Supprimer un utilisateur
const deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Utilisateur WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Utilisateur supprimé avec succès" });
  });
};

// 🔹 Récupérer un utilisateur par son ID
const getUserById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM Utilisateur WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(results[0]);
  });
};


module.exports = {
  getAllUsers,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserById
};
