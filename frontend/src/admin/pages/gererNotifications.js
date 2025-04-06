import React, { useState, useEffect } from "react";

const AdminManageNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({ message: "", type: "", destinataire: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => setMessage("Erreur lors du chargement des notifications"));
  }, []);

  const handleSendNotification = async () => {
    if (!newNotification.message || !newNotification.type || !newNotification.destinataire) {
      setMessage("Veuillez remplir tous les champs");
      return;
    }
    try {
      const response = await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNotification),
      });
      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      setMessage("Notification envoyée avec succès");
      setNewNotification({ message: "", type: "", destinataire: "" });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleDeleteNotification = async (id) => {
    try {
      await fetch(`/api/notifications/${id}`, { method: "DELETE" });
      setNotifications(notifications.filter((notif) => notif.id !== id));
    } catch (error) {
      setMessage("Erreur lors de la suppression");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Gérer les notifications</h2>
      {message && <p className="text-red-500 text-center">{message}</p>}
      
      <h3 className="font-semibold mt-4">Envoyer une nouvelle notification</h3>
      <input
        type="text"
        placeholder="Message"
        value={newNotification.message}
        onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Type (ex: Confirmation, Promotion)"
        value={newNotification.type}
        onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Destinataire (ex: email, ID utilisateur)"
        value={newNotification.destinataire}
        onChange={(e) => setNewNotification({ ...newNotification, destinataire: e.target.value })}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleSendNotification} className="w-full bg-green-500 text-white p-2 rounded mb-4">
        Envoyer
      </button>
      
      <h3 className="font-semibold mt-4">Notifications existantes</h3>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} className="border p-2 my-2 flex justify-between">
            <span>{notif.message} - {notif.type}</span>
            <button onClick={() => handleDeleteNotification(notif.id)} className="bg-red-500 text-white px-2 rounded">Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManageNotifications;
