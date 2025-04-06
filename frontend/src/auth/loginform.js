import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/loginform.css";
import backgroundVideo from "../assets/videos/background.mp4";
import API from "../services/api"; // Utiliser l'instance API créée

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Réinitialiser le message d'erreur ou succès

    try {
      // Utiliser Axios pour la requête
      const res = await API.post("/users/login", { email, password });

      if (res.status === 200) {
        setMessage("Connexion réussie !");
        // Tu peux stocker un token ici si besoin
        // Exemple : localStorage.setItem("token", res.data.token);
        window.location.href = "/"; // Redirection vers la page d'accueil après la connexion réussie
      } else {
        setMessage(res.data.message || "Échec de la connexion.");
      }
    } catch (err) {
      setMessage("Erreur de connexion.");
      console.error(err);
    }
  };

  return (
    <div className="login-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Link to="/signupform" className="back-to-home">&#8592;</Link>

      <div className="login-container">
        <h2 className="login-title">Connexion</h2>
        {message && <p style={{ color: "red" }}>{message}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Se connecter</button>
        </form>

        <p className="signup-link"><Link to="/signupform">Vous n'avez pas de compte ?</Link></p>
        <p className="signup-link"><Link to="/password">Mot de passe oublié ?</Link></p>
      </div>
    </div>
  );
}

export default LoginForm;
