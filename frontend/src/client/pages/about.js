import React from "react";
import "../../styles/about.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      {/* 🔹 NAVIGATION */}
      <nav className="navbar">
        <h2 className="logo">Fly Agency</h2>
        
        <ul className="nav-links">
          <li><Link to="/destinations" className="nav-link">Vols</Link></li>
          <li><Link to="/search" className="nav-link">Hotel</Link></li>
          <li><Link to="/about" className="nav-link">À propos de nous</Link></li>
          <li><Link to="/loginform" className="nav-link">Se connecter</Link></li>
        </ul>
      </nav>

      {/* 🔹 BANNIÈRE */}
      <header className="header">
        <div className="image-overlay"></div>
        <h1 className="title">Notre Histoire</h1>
        <p className="subtitle">Découvrez qui nous sommes et pourquoi nous sommes passionnés par la création d'expériences de voyage inoubliables.</p>
      </header>

      {/* 🔹 NOTRE VOYAGE */}
      <section id="destinations">
        <div className="header2">
          <div className="header2-text">
            <h2>NOTRE VOYAGE</h2>
            <p>Fondée en 2024 par AINOUCHE LYDIA, CHAIB MAROUA, CHAIB DIHIA, BRADAI CHANEZ, SAOU MASSINISSA, FLY AGENCY est née d'une passion profonde pour les voyages authentiques et les expériences culturelles. Ce qui a commencé comme un petit bureau avec seulement deux employés s'est transformé en une agence respectée spécialisée dans les voyages sur mesure.</p>
          </div>
        </div>
      </section>

      {/* 🔹 POURQUOI NOUS CHOISIR ? */}
      <section id="hotels">
        <div className="header3">
          <div className="header3-text">
            <h2>Pourquoi nous choisir ?</h2>
            <div className="content">
              <div className="text">
                <p><strong>⭐ Expertise Locale</strong><br />Notre réseau mondial de guides et d'experts locaux vous fait découvrir les trésors cachés de chaque destination.</p>
                <p><strong>⭐ Voyages Personnalisés</strong><br />Chaque itinéraire est conçu sur mesure pour correspondre à vos intérêts, votre style et votre budget.</p>
                <p><strong>⭐ Support 24/7</strong><br />Notre équipe est disponible à tout moment pendant votre voyage pour vous assister en cas de besoin.</p>
                <p><strong>⭐ Valeur Exceptionnelle</strong><br />Nous nous efforçons d'offrir les expériences les plus enrichissantes au meilleur rapport qualité-prix.</p>
              </div>
              <div className="imagee">
                <img src="https://th.bing.com/th/id/OIP.BQ5OBkl_PcJ2TdqsuHs67gHaE7?rs=1&pid=ImgDetMain" alt="Voyage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 APPEL À L'ACTION */}
      <section id="destinations">
        <div className="header2">
          <div className="header4-text">
            <h2>Prêt à Commencer Votre Aventure?</h2>
          </div>
        </div>
        <div className="header2-button">
          <button className="btn2">Réserver maintenant</button>
        </div>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Fly Agency</h3>
            <p>Explorez le monde avec nos offres exclusives et nos services de qualité.</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="#destinations">Vols</a></li>
              <li><a href="#hotels">Hôtels</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-icons">
                   <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
             Facebook <i className="fab fa-facebook"></i>
           </Link>
           
           <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-instagram"></i>
           </Link>
           
           <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
             Twitter <i className="fab fa-twitter"></i>
           </Link>
           
           <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             LinkedIn <i className="fab fa-linkedin"></i>
           </Link>
                    
                   </div>
            <p className="contact-info">📍 Adresse : 123 Rue Bejaia, Bejaia, Algérie</p>
            <p className="contact-info">✉️ Email : contact@flyagency.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Fly Agency. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
