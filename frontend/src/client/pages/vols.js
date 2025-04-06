import React, { useState, useRef } from "react"; 
import "../../styles/vols.css";
import { Link } from "react-router-dom";

export default function TravelBookingForm() {
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    adults: 1,
    children: 0,
    classe: "",
    pets: "no",
    message: ""
  });

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const hotelsContainerRef = useRef(null);
  const destinationsContainerRef = useRef(null); // ✅ Correction ajoutée ici
  

  const destinations = ["Paris", "New York", "Tokyo", "Londres", "Dubai", "Rome"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const handleCloseTooltip = () => {
    setTooltipVisible(false);
  };

  const destination = [
    { name: "Béjaïa", flag: "🇩🇿", image: "https://th.bing.com/th/id/OIP.w5hLkdwuZ7arbj_GZYse5wAAAA?rs=1&pid=ImgDetMain" },
    { name: "Alger", flag: "🇩🇿", image: "https://th.bing.com/th/id/OIP.88YLqw4FaC6PhRIuiQBdvAHaEL?rs=1&pid=ImgDetMain" },
    { name: "Constantine", flag: "🇩🇿", image: "https://live.staticflickr.com/8096/8550010885_4c669735f0_z.jpg" },
    { name: "Oran", flag: "🇩🇿", image: "https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-oran-algeria-por-riad-148669f1adfda551de3d9d0f0eb377d4.jpg" },
    { name: "Marseille", flag: "🇫🇷", image: "https://th.bing.com/th/id/OIP.Rq0yGMagcfqJ2BfB0zvBLwHaE7?rs=1&pid=ImgDetMain" }
  ];
  
 

  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="logo">Fly Agency</h2>
        <ul className="nav-links">
          <li><Link to="/destinations" className="nav-link">Vols</Link></li>
          <li><Link to="/search" className="nav-link">Hotel</Link></li>
          <li><Link to="/signupform" className="nav-link">S'inscrire</Link></li>
          <li><Link to="/loginform" className="nav-link">Se connecter</Link></li>
        </ul>
      </nav>

      <header className="headers">
        <h1 className="title">Trouvez votre prochain voyage</h1>
        <p className="subtitle">Recherchez des offres sur des vols,et plus encore</p>

        <div className="form-container">
          <h2 className="form-title">Réservez votre vol </h2>
          <form onSubmit={handleSubmit} className="form-layout">
            <div className="form-group">
              <label className="form-label">De</label>
              <input
                list="destinations"
                name="destination"
                placeholder="Destination"
                className="form-input"
                onChange={handleChange}
                required
                value={formData.destination}
              />
            </div>
            <div className="form-group">
              <label className="form-label">à</label>
              <input
                list="destinations"
                name="destination"
                placeholder="Destination"
                className="form-input"
                onChange={handleChange}
                required
                value={formData.destination}
              />
            </div>
            <datalist id="destinations">
              {destinations.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>

            <div className="form-group">
              <label className="form-label">Date de départ</label>
              <input
                type="date"
                name="departureDate"
                className="form-input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date de retour</label>
              <input
                type="date"
                name="returnDate"
                className="form-input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Classe</label>
              <input
                type="text"
                name="travelers"
                min="1"
                className="form-input"
                onChange={handleChange}
                required
                value={formData.travelers}
                onFocus={() => setTooltipVisible(true)}
              />

{tooltipVisible && (
  <div className="tooltip">
    <div>
      <label>Classe</label>
      <select
        name="classe"
        value={formData.classe}
        onChange={handleChange}
      >
        <option value="eco">Économique</option>
        <option value="eco-premium">Économique Premium</option>
        <option value="affaire">Affaires</option>
        <option value="premiere">Première</option>
      </select>
    </div>
    <div>
      <label>Adultes</label>
      <input
        type="number"
        name="adults"
        min="1"
        value={formData.adults}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Enfants</label>
      <input
        type="number"
        name="children"
        min="0"
        value={formData.children}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Voyage avec un animal ?</label>
      <select
        name="pets"
        value={formData.pets}
        onChange={handleChange}
      >
        <option value="no">Non</option>
        <option value="yes">Oui</option>
      </select>
    </div>
    <button onClick={handleCloseTooltip} className="tooltip-button">
      Terminer
    </button>
  </div>
)}
            </div>

            <button type="submit" className="form-button">Rechercher</button>
          </form>
        </div>
      </header>

      <div className="top-hotels">
  <h2>Destination populaire</h2>
  <div className="destinations-grid">
    {destination.map((item, index) => (
      <div className="hotel-card" key={index}>
        <img src={item.image} alt={item.name} className="destination-image" />
        <div className="destination-info">
          <span className="destination-name">{item.name}</span>
          <span className="destination-flag">{item.flag}</span>
        </div>
      </div>
    ))}
  </div>
</div>




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
              <li><Link to="/vols" className="nav-link">Vols</Link></li>
              <li><a href="#hotels">Hôtels</a></li>
              <li><Link to="/about" className="nav-link">À propos de nous</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-icons">
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook <i className="fab fa-facebook"></i></Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter <i className="fab fa-twitter"></i></Link>
              <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn <i className="fab fa-linkedin"></i></Link>
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
}
