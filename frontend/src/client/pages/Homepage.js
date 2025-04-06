import React, { useState, useEffect } from "react";
import "../../styles/Homepage.css";


const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // 🔹 Liste des images pour le diaporama
  const images = [
    "https://kongres-magazine.eu/wp-content/uploads/2015/05/Paris-.jpeg",
    "https://th.bing.com/th/id/R.77fe296177fa392bb51d689b77d986ff?rik=2j4wCRQNqP28LQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.c8441ad7a4fc54a532de83043c4014e7?rik=cm%2b6n23Mz9DAnQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4f5b28b9e89a2a97590e53dfc06f7b62?rik=oqOqdnPZ%2ft2FPA&pid=ImgRaw&r=0",
    "https://diapogram.com/upload/2019/04/12/20190412002828-b3828d84.jpg",
    "https://th.bing.com/th/id/R.3c08b512c46e0d09f7eeb1f11daf62c4?rik=L8OYHrbAfoiukQ&pid=ImgRaw&r=0"
  ];

  // 🔹 Liste des destinations
  const destinations = [
    {
      title: "Santorini Paradise",
      location: "Santorini, Greece",
      price: "$1,299",
      rating: "4.8",
      image: "https://th.bing.com/th/id/R.12b0e52efea88dc46263dc88963e9201?rik=uTuhk8X5fxAUeA&pid=ImgRaw&r=0"
    },
    {
      title: "Alpine Adventure",
      location: "Swiss Alps, Switzerland",
      price: "$1,499",
      rating: "4.9",
      image: "https://th.bing.com/th/id/OIP.72Y52-wEF36OTyfd_JO0DgHaEw?w=1200&h=771&rs=1&pid=ImgDetMain"
    },
    {
      title: "Tokyo Explorer",
      location: "Tokyo, Japan",
      price: "$1,799",
      rating: "4.7",
      image: "https://th.bing.com/th/id/OIP.z16qCHpn3vVUztRFjrKw4QHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "Bali Retreat",
      location: "Bali, Indonesia",
      price: "$999",
      rating: "4.8",
      image: "https://th.bing.com/th/id/R.797f10311478899b73037d563d76b7f4?rik=YFVY3Y0Qrr%2fiGA&pid=ImgRaw&r=0"
    }
  ];
  const hotels = [
    {
        name: "club aloui",
        location: "Bejaia, Algerie",
        price: "$250/nuit",
        rating: "4.7",
        image: "https://th.bing.com/th/id/OIP.DxpW1o8PMhk8eZdMrcCd0AHaE8?w=1024&h=683&rs=1&pid=ImgDetMain"
      },
    {
      name: "Grand Hotel Paris",
      location: "Paris, France",
      price: "$250/nuit",
      rating: "4.7",
      image: "https://th.bing.com/th/id/OIP.q47qlpXq6prkMIUjYHPkVAHaE7?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: "Tokyo Luxury Stay",
      location: "Tokyo, Japon",
      price: "$180/nuit",
      rating: "4.5",
      image: "https://th.bing.com/th/id/OIP.BDSML0aOze7ZAy4ODYaKagHaE8?rs=1&pid=ImgDetMain"
    },
    {
      name: "Santorini Dream",
      location: "Santorini, Grèce",
      price: "$300/nuit",
      rating: "4.9",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c8/65/d8/arnor-de-luxe-hotel-spa.jpg?w=900&h=-1&s=1"
    }
  ];
  

  // 🔹 Changer d'image toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  console.log("Liste des destinations :", destinations);

  return (
    <div className="container">
      {/* 🔹 NAVIGATION */}
      <nav className="navbar">
        <h2 className="logo">Fly Agency</h2>
        <div className="searchContainer">
          <input type="text" className="search-bar" placeholder="Rechercher un vol..." />
        </div>
        <ul className="nav-links">
          {["destinations", "about", "book"].map((link, index) => (
            <li key={index}>
              <a
                href={`#${link}`}
                className={`nav-link ${hoveredLink === link ? "nav-link-hover" : ""}`}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link === "destinations" ? "Destinations" : 
                 link === "about" ? "À propos de nous" : 
                 "Réserver"}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 BANNIÈRE AVEC DIAPORAMA */}
      <header className="header">
        <div className="image-overlay"></div>
        {images.map((img, index) => (
          <div
            key={index}
            className={`image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <h1 className="title">Explorez le Monde avec Nous</h1>
        <p className="subtitle">Trouvez et réservez vos voyages en un clic</p>

        {/* 🔹 BOUTONS */}
        <div className="button-container">
          <a
            href="#destinations"
            className={`button ${hoveredButton === "explorer" ? "button-hover" : ""}`}
            onMouseEnter={() => setHoveredButton("explorer")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Explorer Destinations
          </a>

          <a
            href="#offers"
            className={`button-secondary ${hoveredButton === "offres" ? "button-secondary-hover" : ""}`}
            onMouseEnter={() => setHoveredButton("offres")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Voir Offres
          </a>
        </div>
      </header>

      {/* 🔹 SECTION DESTINATIONS */}
      <section id="destinations">
      <div className="header2">
  <div className="header2-text">
    <h2>Destinations en Vedette</h2>
    <p>Explorez nos destinations soigneusement sélectionnées, offrant des expériences extraordinaires et des aventures inoubliables à travers le monde.</p>
  </div>
  <div className="header2-button">
    <button className="btn">Voir Plus</button>
  </div>
</div>


        <div className="destinations">
          {destinations.map((dest, index) => (
            <div key={index} className="card">
              <img src={dest.image} alt={dest.title} className="imgs" />
              <div className="card-content">
                <h3>{dest.title}</h3>
            

                <p className="location">{dest.location}</p>
                <p className="price">À partir de {dest.price}</p>
                <p className="rating">⭐ {dest.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
 {/* 🔹 SECTION HÔTELS */}
{/* 🔹 SECTION HÔTELS */}
<section id="hotels">
  <div className="header2">
    <div className="header2-text">
      <h2>Hôtels Recommandés</h2>
      <p>Découvrez nos meilleurs hôtels sélectionnés pour un séjour inoubliable.</p>
    </div>
    <div className="header2-button">
      <button className="btn">Voir Plus</button>
    </div>
  </div>

  <div className="destinations">  {/* Utiliser la même classe que destinations */}
    {hotels.map((hotel, index) => (
      <div key={index} className="card">  {/* Utiliser la même classe que les cartes destinations */}
        <img src={hotel.image} alt={hotel.name} className="imgs" />
        <div className="card-content">
          <h3>{hotel.name}</h3>
          <p className="location">{hotel.location}</p>
          <p className="price">À partir de {hotel.price}</p>
          <p className="rating">⭐ {hotel.rating}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>Fly Agency</h3>
        <p>Explorez le monde avec nos offres exclusives et nos services de qualité.</p>
      </div>

      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#hotels">Hôtels</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Suivez-nous</h4>
        <div className="social-icons">
          <a href="#">Facebook<i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#">twitter<i className="fab fa-twitter"></i></a>
          <a href="#">Linkedin<i className="fab fa-linkedin"></i></a>
         
        </div>
        <p className="contact-info">📍 Adresse : 123 Rue Bejaia, Bejaia,Algerie</p>
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
