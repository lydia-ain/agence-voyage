-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 04 avr. 2025 à 12:58
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `agence_voyage`
--

-- --------------------------------------------------------

--
-- Structure de la table `chambre`
--

DROP TABLE IF EXISTS `chambre`;
CREATE TABLE IF NOT EXISTS `chambre` (
  `id_chm` int NOT NULL AUTO_INCREMENT,
  `etage` int DEFAULT NULL,
  `nbr_lits` int DEFAULT NULL,
  `id_hotel` int DEFAULT NULL,
  PRIMARY KEY (`id_chm`),
  KEY `id_hotel` (`id_hotel`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `excursioncollectif`
--

DROP TABLE IF EXISTS `excursioncollectif`;
CREATE TABLE IF NOT EXISTS `excursioncollectif` (
  `id_exc` int NOT NULL AUTO_INCREMENT,
  `lieu` varchar(100) DEFAULT NULL,
  `duree` time DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `tarif` decimal(10,2) DEFAULT NULL,
  `guideInclus` tinyint(1) DEFAULT NULL,
  `id_offre` int DEFAULT NULL,
  PRIMARY KEY (`id_exc`),
  KEY `id_offre` (`id_offre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
CREATE TABLE IF NOT EXISTS `hotel` (
  `id_hotel` int NOT NULL AUTO_INCREMENT,
  `nomHotel` varchar(100) DEFAULT NULL,
  `adresse` text,
  `nombreEtoiles` int DEFAULT NULL,
  `tarifParNuit` decimal(10,2) DEFAULT NULL,
  `disponibilite` tinyint(1) DEFAULT '1',
  `id_offre` int DEFAULT NULL,
  PRIMARY KEY (`id_hotel`),
  KEY `id_offre` (`id_offre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `id_notif` int NOT NULL AUTO_INCREMENT,
  `email_dest` varchar(100) DEFAULT NULL,
  `num_tel` varchar(20) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_notif`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `offre`
--

DROP TABLE IF EXISTS `offre`;
CREATE TABLE IF NOT EXISTS `offre` (
  `id_offre` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(100) DEFAULT NULL,
  `destination_favoris` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_offre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `id_p` int NOT NULL AUTO_INCREMENT,
  `montant` decimal(10,2) DEFAULT NULL,
  `date_paiement` date DEFAULT NULL,
  `heure_paiement` time DEFAULT NULL,
  `id_res` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_p`),
  KEY `id_res` (`id_res`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_res` int NOT NULL AUTO_INCREMENT,
  `date_reservation` date DEFAULT NULL,
  `statut` enum('confirmée','annulée','en attente') DEFAULT 'en attente',
  `id_user` int DEFAULT NULL,
  `id_offre` int DEFAULT NULL,
  PRIMARY KEY (`id_res`),
  KEY `id_user` (`id_user`),
  KEY `id_offre` (`id_offre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `adresse` text,
  `age` int DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `numero_tel` varchar(20) DEFAULT NULL,
  `role` enum('client','admin') DEFAULT 'client',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vol`
--

DROP TABLE IF EXISTS `vol`;
CREATE TABLE IF NOT EXISTS `vol` (
  `id_vol` int NOT NULL AUTO_INCREMENT,
  `compagnie` varchar(100) DEFAULT NULL,
  `depart` varchar(100) DEFAULT NULL,
  `destination` varchar(100) DEFAULT NULL,
  `date_vol` date DEFAULT NULL,
  `heure_depart` time DEFAULT NULL,
  `duree` time DEFAULT NULL,
  `id_offre` int DEFAULT NULL,
  PRIMARY KEY (`id_vol`),
  KEY `id_offre` (`id_offre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
