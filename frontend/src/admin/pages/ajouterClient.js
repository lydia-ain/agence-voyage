import React, { useState } from "react";
import API from "../../services/api";

function AdminAddClient() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/users", { nom, prenom, email });
      console.log("Client ajouté:", response.data);
      alert("Client ajouté avec succès");
    } catch (error) {
      console.error("Erreur lors de l'ajout du client:", error);
      alert("Une erreur est survenue");
    }
  };

  return (
    <div>
      <h2>Ajouter un client</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminAddClient;
