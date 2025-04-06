import React, { useState } from "react";

const AdminEditOffer = () => {
  const [offerId, setOfferId] = useState("");
  const [offerData, setOfferData] = useState(null);
  const [message, setMessage] = useState("");

  const fetchOffer = async () => {
    if (!offerId) {
      setMessage("Veuillez entrer un ID valide.");
      return;
    }
    try {
      const response = await fetch(`/api/offers/${offerId}`);
      if (!response.ok) throw new Error("Offre non trouvée");
      const data = await response.json();
      setOfferData(data);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
      setOfferData(null);
    }
  };

  const handleChange = (e) => {
    setOfferData({ ...offerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/offers/${offerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(offerData),
      });
      if (!response.ok) throw new Error("Erreur lors de la modification");
      setMessage("Offre modifiée avec succès !");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Modifier une offre</h2>
      <label className="block mb-2">ID de l'offre:</label>
      <input
        type="text"
        value={offerId}
        onChange={(e) => setOfferId(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={fetchOffer} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
        Rechercher l'offre
      </button>

      {message && <p className="text-red-500 text-center">{message}</p>}

      {offerData && (
        <form onSubmit={handleSubmit} className="mt-4">
          {Object.keys(offerData).map((key) => (
            key !== "id" && key !== "type" && (
              <div key={key}>
                <label className="block mt-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
                <input
                  type="text"
                  name={key}
                  value={offerData[key] || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            )
          ))}
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded mt-4">
            Modifier l’offre
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminEditOffer;
