import React, { useState } from "react";


const AdminAddOffer = () => {
  const [offerType, setOfferType] = useState("");
  const [formData, setFormData] = useState({ id: "", images: [] });

  const handleTypeChange = (e) => {
    setOfferType(e.target.value);
    setFormData({ id: "", images: [] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offre publiée:", formData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Ajouter une offre</h2>
      <label className="block mb-2">Type d'offre:</label>
      <select className="w-full p-2 border rounded" onChange={handleTypeChange}>
        <option value="">Sélectionner</option>
        <option value="vol">Vol</option>
        <option value="hotel">Hôtel</option>
        <option value="excursion">Excursion</option>
      </select>

      {offerType && (
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block">ID de l'offre:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />

          {offerType === "vol" && (
            <>
              <label>Numéro du vol:</label>
              <input type="text" name="flightNumber" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Compagnie aérienne:</label>
              <input type="text" name="airline" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Ville de départ:</label>
              <input type="text" name="departureCity" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Ville de destination:</label>
              <input type="text" name="destinationCity" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Date du vol:</label>
              <input type="date" name="flightDate" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Heure de départ:</label>
              <input type="time" name="departureTime" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Durée du vol:</label>
              <input type="text" name="flightDuration" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Prix du billet (€):</label>
              <input type="number" name="ticketPrice" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Nombre de places disponibles:</label>
              <input type="number" name="availableSeats" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
            </>
          )}

          {offerType === "hotel" && (
            <>
              <label>Nom de l'hôtel:</label>
              <input type="text" name="hotelName" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Adresse complète:</label>
              <input type="text" name="hotelAddress" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Nombre d’étoiles:</label>
              <input type="number" name="hotelStars" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Tarif par nuit (€):</label>
              <input type="number" name="nightlyRate" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Nombre total de chambres:</label>
              <input type="number" name="totalRooms" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
            </>
          )}

          {offerType === "excursion" && (
            <>
              <label>Lieu de l’excursion:</label>
              <input type="text" name="excursionLocation" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Type d'excursion:</label>
              <input type="text" name="excursionType" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Date de l’excursion:</label>
              <input type="date" name="excursionDate" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Durée (jours):</label>
              <input type="number" name="excursionDuration" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
              <label>Tarif par personne (€):</label>
              <input type="number" name="excursionPrice" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
            </>
          )}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Publier l’offre</button>
        </form>
      )}
    </div>
  );
};

export default AdminAddOffer;
