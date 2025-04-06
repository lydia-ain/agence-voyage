import React from "react";
import { Link } from "react-router-dom";
import "../styles/singupform.css";
import backgroundVideo from "../assets/videos/background.mp4";

function SignupForm() {
  return (
    <div className="signup-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Link to="/" className="back-to-home">&#8592;</Link>

      <div className="signup-container">
        <h2 className="signup-title">S'inscrire</h2>
        <form className="signup-form">
          <input type="text" placeholder="Nom" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Mot de passe" className="signup-input" />
          <input type="password" placeholder="Confirmer le mot de passe" className="signup-input" />
          <button type="submit" className="signup-button">S'inscrire</button>
        </form>

        <p className="login-link">
          <Link to="/loginform">Vous avez déjà un compte ?</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
