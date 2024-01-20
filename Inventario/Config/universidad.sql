-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2024 at 11:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `universidad`
--

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes`
--

CREATE TABLE `estudiantes` (
  `ID_estudiante` int(11) NOT NULL,
  `Nombre` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Edad` int(11) NOT NULL,
  `Carrera` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Promedio` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiantes`
--

INSERT INTO `estudiantes` (`ID_estudiante`, `Nombre`, `Edad`, `Carrera`, `Promedio`) VALUES
(1, 'Fabiana Rodriguez', 20, 'Ingeniería de Software', '8.60');

-- --------------------------------------------------------

--
-- Table structure for table `materias`
--

CREATE TABLE `materias` (
  `ID_materia` int(11) NOT NULL,
  `Nombre_materia` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Profesor` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `ID_estudiante` int(11) NOT NULL,
  `Calificacion` decimal(4,2) NOT NULL,
  `Fecha_examen` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materias`
--

INSERT INTO `materias` (`ID_materia`, `Nombre_materia`, `Profesor`, `ID_estudiante`, `Calificacion`, `Fecha_examen`) VALUES
(1, 'Aplicaciones Web', 'Luis Llerena', 1, '9.70', '2023-05-10');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioId` int(11) NOT NULL,
  `Cedula` varchar(17) NOT NULL,
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Telefono` varchar(17) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Contrasenia` text NOT NULL,
  `Rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`UsuarioId`, `Cedula`, `Nombres`, `Apellidos`, `Telefono`, `Correo`, `Contrasenia`, `Rol`) VALUES
(1, '1758875627', 'Marina', 'Mendez', '0967371562', 'schgallery24@gmail.com', '123', 'Administrador'),
(5, '1758875627', 'Fabiana Cairo', 'Rodríguez Méndez', '0980040930', 'fabbii56@gmail.com', '123', 'Administrador'),
(6, '1750065730', 'Camila', ' Parker', '0967371562', 'cami@hotmail.com', '123', 'Cliente');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`ID_estudiante`);

--
-- Indexes for table `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_materia`),
  ADD KEY `ID_estudiante` (`ID_estudiante`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `ID_estudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `materias`
--
ALTER TABLE `materias`
  MODIFY `ID_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `UsuarioId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`ID_estudiante`) REFERENCES `estudiantes` (`ID_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
