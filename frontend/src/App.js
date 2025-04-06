import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔐 Auth
import LoginForm from "./auth/loginform";
import SignupForm from "./auth/signupform";
import PasswordReset from "./auth/password";

// 👤 Client Pages
import HomePage from "./client/pages/Homepage";
import About from "./client/pages/about";
import SearchForm from "./client/pages/search";
import Vols from "./client/pages/vols";

// 🛠️ Admin Pages
import AdminDashboard from "./admin/pages/adminDashboard";
import AdminAddClient from "./admin/pages/ajouterClient";
import AdminAddOffer from "./admin/pages/ajouterOffre";
import AdminEditOffer from "./admin/pages/modifierOffre";
import AdminDeleteOffer from "./admin/pages/supprimerOffre";
import AdminDeleteClient from "./admin/pages/supprimerClient";
import AdminViewReservations from "./admin/pages/consulterReservations";
import AdminManageNotifications from "./admin/pages/gererNotifications";


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/password" element={<PasswordReset />} />

        {/* Client */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/destinations" element={<Vols />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/ajouter-client" element={<AdminAddClient />} />
        <Route path="/admin/ajouter-offre" element={<AdminAddOffer />} />
        <Route path="/admin/modifier-offre" element={<AdminEditOffer />} />
        <Route path="/admin/supprimer-offre" element={<AdminDeleteOffer />} />
        <Route path="/admin/supprimer-client" element={<AdminDeleteClient />} />
        <Route path="/admin/reservations" element={<AdminViewReservations />} />
        <Route path="/admin/notifications" element={<AdminManageNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;

