import { useState, useRef } from "react";
import "../../styles/SearchForm.css";
import { Link } from "react-router-dom";

export default function TravelBookingForm() {
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
    adults: 1,
    children: 0,
    rooms: 1,
    pets: "no",
    message: ""
  });

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const hotelsContainerRef = useRef(null);

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

  const hotels = [
    { name: "Hôtel de Luxe", stars: 5, price: 250, image: "https://th.bing.com/th/id/OIP.SZbMhPa7GXyLYU3G2diMLwHaLH?rs=1&pid=ImgDetMain" },
    { name: "Palace Royal", stars: 4, price: 180, image: "https://th.bing.com/th/id/OIP.78UTC3ISHfRar8-eqoTQvQHaFj?w=1024&h=768&rs=1&pid=ImgDetMain" },
    { name: "Vue Panoramique", stars: 3, price: 120, image: "https://th.bing.com/th/id/OIP.X3k9fnO_AZIxUYe2R4W3BgHaDt?w=1440&h=720&rs=1&pid=ImgDetMain" },
    { name: "Horizon Bleu", stars: 4, price: 200, image: "https://bruxelles-city-news.be/wp-content/uploads/2023/08/hotel-resto-avenue-louise.jpg" },
    { name: "Evasion Tropicale", stars: 5, price: 300, image: "https://th.bing.com/th/id/R.1444a698f7e0f91bbd501a8e00cea20b?rik=4fLyf5gbcBp92w&pid=ImgRaw&r=0" },
    { name: "Le Mirage", stars: 5, price: 350, image: "https://d3u9sm4kpb9d1j.cloudfront.net/pictures/5978060" },
    { name: "Riviera Beach", stars: 4, price: 220, image: "https://th.bing.com/th/id/OIP._UHuaYVAJqJgcHpp1EVbWAHaHX?rs=1&pid=ImgDetMain" },
    { name: "Sunset Resort", stars: 4, price: 180, image: "https://th.bing.com/th/id/R.c3f2fa9d3ce8c311db7eb911a407c0da?rik=PWU95EcPAM9R2Q&pid=ImgRaw&r=0" },
    { name: "Les Jardins d'Alger", stars: 3, price: 150, image: "https://photos.hotelbeds.com/giata/xl/55/557381/557381a_hb_p_004.jpg" },
    { name: "Palmeraie Palace", stars: 5, price: 400, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f4/6d/1e/the-everest-hotel.jpg?w=700&h=-1&s=1" }
];

  const scrollHotels = (direction) => {
    if (hotelsContainerRef.current) {
      hotelsContainerRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      {/* 🔹 NAVIGATION */}
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
        <h1 className="title">Trouvez votre prochain séjour</h1>
        <p className="subtitle">Recherchez des offres sur des hôtels, des hébergements indépendants et plus encore</p>

        {/* 🔹 FORMULAIRE DE RÉSERVATION */}
        <div className="form-container">
          <h2 className="form-title">Réservez votre séjour</h2>
          <form onSubmit={handleSubmit} className="form-layout">
            <div className="form-group">
              <label className="form-label">Destination</label>
              <input
                list="destinations"
                name="destination"
                placeholder="Destination"
                className="form-input"
                onChange={handleChange}
                required
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
              <label className="form-label">Nombre de voyageurs</label>
              <input
                type="number"
                name="travelers"
                min="1"
                className="form-input"
                onChange={handleChange}
                required
                value={formData.travelers}
                onFocus={() => setTooltipVisible(true)}
              />

              {/* Tooltip avec options supplémentaires */}
              {tooltipVisible && (
                <div className="tooltip">
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
                    <label>Nombre de chambres</label>
                    <input
                      type="number"
                      name="rooms"
                      min="1"
                      value={formData.rooms}
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
                  {/* 🔹 Bouton "Terminer" pour fermer le popup */}
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
        <h2>Top Réservation Hôtels En Algérie</h2>
        <p>Trouvez les meilleures hôtels du moment</p>
      </div>
      {/* 🔹 SECTION DES MEILLEURS HÔTELS */}
      <div className="best-hotels">
        <button className="arrow left-arrow" onClick={() => scrollHotels("left")}>❮</button>
        <div className="hotels-container" ref={hotelsContainerRef}>
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.image} alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <p className="stars">{"⭐".repeat(hotel.stars)}</p>
              <p className="price">{hotel.price}€ / nuit</p>
              <Link to={`/hotel-details/${index}`} className="details-button">Voir les détails</Link>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={() => scrollHotels("right")}>❯</button>
      </div>
      <div className="special-offers">
  <h3>Offres Spéciales</h3>
  <div className="offers-container">
    {/* Offre de l'Hôtel de Luxe */}
    <div className="offer-card">
      <div className="promo-badge">🎉</div>
      <img src="https://th.bing.com/th/id/OIP.SZbMhPa7GXyLYU3G2diMLwHaLH?rs=1&pid=ImgDetMain" alt="Hôtel de Luxe" className="offer-image" />
      <h4>Hôtel de Luxe</h4>
      <p className="stars">{"⭐".repeat(5)}</p>
      <p className="price-before">Prix avant l'offre : 250€ / nuit</p>
      <p className="price-after">Prix après l'offre : 200€ / nuit</p>
      <Link to={`/hotel-details/palace-royal`} className="details-button">Voir les détails</Link>
    </div>

    {/* Offre de Palace Royal */}
    <div className="offer-card">
      <div className="promo-badge">🎉</div>
      <img src="https://th.bing.com/th/id/OIP.78UTC3ISHfRar8-eqoTQvQHaFj?w=1024&h=768&rs=1&pid=ImgDetMain" alt="Palace Royal" className="offer-image" />
      <h4>Palace Royal</h4>
      <p className="stars">{"⭐".repeat(4)}</p>
      <p className="price-before">Prix avant l'offre : 180€ / nuit</p>
      <p className="price-after">Prix après l'offre : 150€ / nuit</p>
      <Link to={`/hotel-details/palace-royal`} className="details-button">Voir les détails</Link>
    </div>

    {/* Offre de Vue Panoramique */}
    <div className="offer-card">
      <div className="promo-badge">🎉</div>
      <img src="https://th.bing.com/th/id/OIP.X3k9fnO_AZIxUYe2R4W3BgHaDt?w=1440&h=720&rs=1&pid=ImgDetMain" alt="Vue Panoramique" className="offer-image" />
      <h4>Vue Panoramique</h4>
      <p className="stars">{"⭐".repeat(3)}</p>
      <p className="price-before">Prix avant l'offre : 120€ / nuit</p>
      <p className="price-after">Prix après l'offre : 100€ / nuit</p>
      <Link to={`/hotel-details/palace-royal`} className="details-button">Voir les détails</Link>
    </div>

    {/* Ajouter d'autres hôtels ici si nécessaire */}
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
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#hotels">Hôtels</a></li>
              <li><Link to="/about" className="nav-link">À propos de nous</Link></li>
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



