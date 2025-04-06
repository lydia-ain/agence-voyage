import React, { useState } from "react";

const AdminDeleteOffer = () => {
  const [offerId, setOfferId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!offerId) {
      setMessage("Veuillez entrer un ID d'offre valide.");
      return;
    }
    
    try {
      const response = await fetch(`/api/offers/${offerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) throw new Error("Erreur lors de la suppression de l'offre");
      setMessage(`L'offre avec l'ID ${offerId} a été supprimée avec succès.`);
      setOfferId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Supprimer une offre</h2>
      <label className="block mb-2">ID de l'offre:</label>
      <input
        type="text"
        value={offerId}
        onChange={(e) => setOfferId(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={handleDelete} className="w-full bg-red-500 text-white p-2 rounded">
        Supprimer l'offre
      </button>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default AdminDeleteOffer;
