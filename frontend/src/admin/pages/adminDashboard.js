import React, { useState } from "react";
import AjouterOffre from "./ajouterOffre";
import ModifierOffre from "./modifierOffre";
import SupprimerOffre from "./supprimerOffre";
import AjouterClient from "./ajouterClient";
import SupprimerClient from "./supprimerClient";
import GererNotifications from "./gererNotifications";
import ConsulterReservations from "./consulterReservations";

function App() {
  const [visibleComponent, setVisibleComponent] = useState(null);

  // Fonction pour afficher ou cacher un composant
  const toggleComponent = (component) => {
    setVisibleComponent(visibleComponent === component ? null : component);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Tableau de Bord</h1>
      
      {/* Boutons pour afficher les composants */}
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mt-4">
        <button className="bg-blue-500 text-white p-3 rounded" onClick={() => toggleComponent("ajouterOffre")}>
          Ajouter une offre
        </button>
        <button className="bg-yellow-500 text-white p-3 rounded" onClick={() => toggleComponent("modifierOffre")}>
          Modifier une offre
        </button>
        <button className="bg-red-500 text-white p-3 rounded" onClick={() => toggleComponent("supprimerOffre")}>
          Supprimer une offre
        </button>
        <button className="bg-green-500 text-white p-3 rounded" onClick={() => toggleComponent("ajouterClient")}>
          Ajouter un client
        </button>
        <button className="bg-red-400 text-white p-3 rounded" onClick={() => toggleComponent("supprimerClient")}>
          Supprimer un client
        </button>
        <button className="bg-purple-500 text-white p-3 rounded" onClick={() => toggleComponent("gererNotifications")}>
          Gérer les notifications
        </button>
        <button className="bg-gray-500 text-white p-3 rounded" onClick={() => toggleComponent("consulterReservations")}>
          Consulter les réservations
        </button>
      </div>

      {/* Affichage conditionnel des composants */}
      <div className="mt-6">
        {visibleComponent === "ajouterOffre" && <AjouterOffre />}
        {visibleComponent === "modifierOffre" && <ModifierOffre />}
        {visibleComponent === "supprimerOffre" && <SupprimerOffre />}
        {visibleComponent === "ajouterClient" && <AjouterClient />}
        {visibleComponent === "supprimerClient" && <SupprimerClient />}
        {visibleComponent === "gererNotifications" && <GererNotifications />}
        {visibleComponent === "consulterReservations" && <ConsulterReservations />}
      </div>
    </div>
  );
}

export default App;
