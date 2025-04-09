import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./detail.css";

const DetailDestination = ({ destination: propDestination, id }) => {
  // Destination par défaut, mémorisée
  const defaultDestination = useMemo(() => ({
    nom: "Béjaïa",
    pays: "Algérie",
    description: "Une ville côtière magnifique avec des paysages naturels exceptionnels.",
    prix: 800,
    images: [
      "https://th.bing.com/th/id/OIP.bioF5YaJM_ufAJrecbIkMQHaEo?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIF.0UqD9Z56fvmPlQ0SfyuZVw?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th?id=OIF.H3OgQuMJ86RU1Lp%2fpOI1eQ&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIF.W9iUhIvz00WAy4ovqoRkdw?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.QwNB1D4o60VNfFr09EcYrAHaE7?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    ],
    equipements: ["Wi-Fi gratuit", "Piscine", "Parking sécurisé", "Petit-déjeuner inclus"]
  }), []); // Vide = il ne change jamais

  const [destination, setDestination] = useState(defaultDestination);
  const [selectedImage, setSelectedImage] = useState(defaultDestination.images[0]);

  useEffect(() => {
    if (propDestination) {
      setDestination(propDestination);
      setSelectedImage(propDestination.images[0]);
    } else {
      fetch(`http://localhost:5000/api/destinations/${id}`)
        .then(res => res.json())
        .then(data => {
          setDestination(data);
          setSelectedImage(data.images[0]);
        })
        .catch(err => {
          console.warn("Erreur API, fallback sur les données par défaut", err);
          setDestination(defaultDestination);
          setSelectedImage(defaultDestination.images[0]);
        });
    }
  }, [id, propDestination, defaultDestination]);

  return (
    <div className="container">
      {/* Navbar */}
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

      <nav className="navbar">
        <h2 className="logo">Fly Agency</h2>
        <ul className="nav-links">
          <li><Link to="/vols" className="nav-link">Vols</Link></li>
          <li><Link to="/search" className="nav-link">Hôtels</Link></li>
          <li><Link to="/signupform" className="nav-link">S'inscrire</Link></li>
          <li><Link to="/loginform" className="nav-link">Se connecter</Link></li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <div className="container2">
       <div className="detail-container">
    
        <img src={selectedImage} alt="Destination" className="main-image" />
        <div className="side-images">
          {destination.images.slice(1).map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Extra ${index + 1}`} 
              className="side-image" 
              onClick={() => setSelectedImage(img)} 
            />
          ))}
        </div>
      
      </div>

      {/* Contenu sous les images */}
      <div className="detail-content">
        
        <h2 className="detail-title">{destination.nom} - {destination.pays}</h2>
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(destination.nom + ', ' + destination.pays)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            
            marginLeft:'600px',
            marginTop: '10px',
            padding: '10px 15px',
            backgroundColor: '#000000',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            top:'20px',
          }}
        >
          📍 Voir sur Google Maps
        </a>

        <div className="detail-sections">
          <div className="section">
            <h3>Description</h3>
            <p>{destination.description}</p>
            <p><strong>Prix :</strong> {destination.prix} €</p>
          </div>

          <div className="section">
          <h3>Réserver un hébergement</h3>
              <table className="tableau-hebergements">
                <thead>
                  <tr>
                    <th>Type de logement</th>
                    <th>Nombre de voyageurs</th>
                    <th>Tarif du jour</th>
                    <th>Vos options</th>
                    <th>Sélectionner des chambres</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chambre Double Standard</td>
                    <td>2</td>
                    <td>DZD 18 765</td>
                    <td>1 lit double, Salle de bains privative, Télévision à écran plat, Wi-Fi Gratuit, Petit-déjeuner inclus</td>
                    <td><button>Sélectionner</button></td>
                  </tr>
                  <tr>
                    <td>Chambre Double Supérieure</td>
                    <td>2</td>
                    <td>DZD 19 760</td>
                    <td>1 grand lit double, Lit bébé gratuit, Salle de bains privative, Wi-Fi Gratuit, Annulation gratuite avant le 19 avril 2025</td>
                    <td><button>Sélectionner</button></td>
                  </tr>
                  <tr>
                    <td>Chambre Double Deluxe</td>
                    <td>2</td>
                    <td>DZD 22 545</td>
                    <td>Vue sur la ville, 1 grand lit double, Salle de bains privative, Télévision à écran plat, Wi-Fi Gratuit, Non remboursable</td>
                    <td><button>Sélectionner</button></td>
                  </tr>
                  <tr>
                    <td>Chambre Simple Standard</td>
                    <td>1</td>
                    <td>DZD 16 245</td>
                    <td>1 lit simple, Salle de bains privative, Télévision à écran plat, Wi-Fi Gratuit, Petit-déjeuner inclus</td>
                    <td><button>Sélectionner</button></td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
        <div className="section">
        <h3>Équipements de l'établissement Elite Grand Hotel Gävle</h3>
  <p><strong>Excellents équipements !</strong> Note : 8.8</p>
  
  <table className="equipments-table">
    <thead>
      <tr>
        <th>Équipement</th>
        <th>Disponible</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><i className="fas fa-smoking-ban"></i> Chambres non-fumeurs</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-wifi"></i> Connexion Wi-Fi gratuite</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-users"></i> Chambres familiales</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-parking"></i> Parking sur place</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-wheelchair"></i> Équipements pour les personnes handicapées</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-dumbbell"></i> Centre de remise en forme</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-utensils"></i> Restaurant</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-coffee"></i> Plateau/bouilloire dans tous les hébergements</td>
        <td>Oui</td>
      </tr>
      <tr>
        <td><i className="fas fa-cocktail"></i> Bar</td>
        <td>Oui</td>
      </tr>
    </tbody>
  </table>
            </div>

            {/* Section des commentaires des clients */}
            <div className="section-comments">
  <h3>Commentaires des clients</h3>

  <div className="comment">
    <span className="user-name">Jean Dupont</span>
    <p>"Séjour parfait, très bon service et équipements. Très satisfait de la qualité de l'hôtel!"</p>
    <div className="comment-date">Posté le 20 mars 2025</div>
  </div>

  <div className="comment">
    <span className="user-name">Marie Martin</span>
    <p>"Chambres spacieuses et propres. Le personnel est accueillant et serviable."</p>
    <div className="comment-date">Posté le 18 mars 2025</div>
  </div>

  <div className="comment">
    <span className="user-name">Lucie Pierre</span>
    <p>"Idéal pour des vacances en famille. Le parking est très pratique."</p>
    <div className="comment-date">Posté le 15 mars 2025</div>
  </div>
</div>

          </div>
        </div>
      
     

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Fly Agency. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default DetailDestination;
