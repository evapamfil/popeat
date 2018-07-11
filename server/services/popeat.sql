-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 11 juil. 2018 à 22:26
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `popeat`
--

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `paiement` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id`, `price`, `user_id`, `paiement`) VALUES
(1, 8, 8, ''),
(2, 8, 8, '(succed)'),
(3, 16, 5, '(succed)'),
(4, 16, 5, '(succed)'),
(5, 16, 5, '(succed)'),
(6, 8, 5, '(succed)'),
(7, 8, 5, '(succed)'),
(8, 8, 5, '(succed)'),
(9, 8, 5, '(succed)'),
(10, 8, 5, '(succed)'),
(11, 8, 5, '(succed)'),
(12, 16, 5, '(succed)');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `code_postal` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `mail`, `password`, `adresse`, `ville`, `code_postal`) VALUES
(5, 'Eva', 'Pamfil', 'evapamfil1@gmail.com', '$2b$10$OZh6cJoxFT13PnqF0ff/P.xVz22PJ6YM/pzOlxfTA2aMBxruzAqP.', '91 boulevard Rodin', 'Issy-les-Moulineaux', '92130'),
(7, 'isabelle', 'jaworski', 'test@gmail.com', '$2b$10$iR9Y9Hlrs33XO.fwsiHgv.OjH5vvpWosQbamdz4NyZiz7uqjB0Q2a', '91 boulevard Rodin', 'Issy-les-Moulineaux', '92130'),
(8, 'Romain', 'Legore', 'romain.legore@gmail.com', '$2b$10$0S3Sl6z1KpfHyuP2Fn9x4en/FZq0iEqGkNeN2vSQx77k7mP1brWBS', '8 bis place leon blum', 'Issy-les-Moulineaux', '92130');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
