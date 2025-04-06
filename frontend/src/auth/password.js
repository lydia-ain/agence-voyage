import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/password.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Veuillez entrer votre adresse e-mail.");
      return;
    }

    // Simuler l'envoi de l'email de réinitialisation
    setMessage("Si cet e-mail est enregistré, un lien de réinitialisation vous sera envoyé.");
  };

  return (
    <div className="login-wrapper">
      {/* Bouton retour */}
      <Link to="/" className="back-to-home">
        &#8592;
      </Link>

      {/* Conteneur du formulaire */}
      <div className="login-container">
        <h2 className="login-title">Mot de passe oublié</h2>
        <p className="signup-link">
          Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.
        </p>

        {/* Messages de confirmation / erreur */}
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
            placeholder="Entrez votre email"
          />
          <button type="submit" className="login-button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
