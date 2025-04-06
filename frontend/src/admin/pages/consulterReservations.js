import React, { useState, useEffect } from "react";

const AdminViewReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations");
        if (!response.ok) throw new Error("Erreur lors de la récupération des réservations");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        setMessage(error.message);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Liste des réservations</h2>
      {message && <p className="text-red-500 text-center">{message}</p>}
      {reservations.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Client</th>
              <th className="border p-2">Offre</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Statut</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id} className="text-center">
                <td className="border p-2">{res.id}</td>
                <td className="border p-2">{res.client}</td>
                <td className="border p-2">{res.offer}</td>
                <td className="border p-2">{res.date}</td>
                <td className="border p-2">{res.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">Aucune réservation trouvée.</p>
      )}
    </div>
  );
};

export default AdminViewReservations;
