-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: May 14, 2025 at 09:16 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `traningsdagbok`
--

-- --------------------------------------------------------

--
-- Table structure for table `workouts`
--

CREATE TABLE `workouts` (
  `workout_id` bigint NOT NULL,
  `workout_date` date NOT NULL,
  `workout_name` varchar(200) NOT NULL,
  `workout_length_total` int NOT NULL DEFAULT '0',
  `workout_comment` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`workout_id`, `workout_date`, `workout_name`, `workout_length_total`, `workout_comment`) VALUES
(1, '2025-04-21', 'Torsdagspasset', 0, 'Min första registrering av handbollträning'),
(2, '2025-04-22', 'Fredagspasset', 0, 'Min första registrering av fotbollträning'),
(3, '2025-04-23', 'Lördagspasset', 0, 'Min första registrering av ishockeyträning'),
(4, '2025-04-24', 'Söndagspasset', 0, 'Min första registrering av pingpongträning'),
(5, '2025-04-21', 'Måndagspasset', 0, 'Min första registrering av fridrotträning'),
(6, '2025-04-22', 'Tisdagspasset', 0, 'Kommentaren min'),
(7, '2025-04-23', 'Onsdagspasset', 0, 'Onsdagsklommentar');

-- --------------------------------------------------------

--
-- Table structure for table `workoutsessions`
--

CREATE TABLE `workoutsessions` (
  `workoutsession_id` bigint NOT NULL,
  `workoutsession_time` int NOT NULL,
  `workouttype_id` bigint DEFAULT NULL,
  `workout_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `workoutsessions`
--

INSERT INTO `workoutsessions` (`workoutsession_id`, `workoutsession_time`, `workouttype_id`, `workout_id`) VALUES
(1, 50, 1, 1),
(2, 40, 2, 1),
(3, 50, 1, 2),
(4, 60, 2, 2),
(5, 30, 4, 3),
(6, 40, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `workouttypes`
--

CREATE TABLE `workouttypes` (
  `workouttype_id` bigint NOT NULL,
  `workouttype_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `workouttypes`
--

INSERT INTO `workouttypes` (`workouttype_id`, `workouttype_name`) VALUES
(1, 'Fotboll'),
(2, 'Handboll'),
(3, 'Ishockey'),
(4, 'Löpträning'),
(5, 'Friidrott'),
(6, 'Handboll'),
(7, 'Pingpong'),
(8, 'ICA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`workout_id`);

--
-- Indexes for table `workoutsessions`
--
ALTER TABLE `workoutsessions`
  ADD PRIMARY KEY (`workoutsession_id`),
  ADD KEY `workouttype_id` (`workouttype_id`),
  ADD KEY `workout_id` (`workout_id`);

--
-- Indexes for table `workouttypes`
--
ALTER TABLE `workouttypes`
  ADD PRIMARY KEY (`workouttype_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `workout_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `workoutsessions`
--
ALTER TABLE `workoutsessions`
  MODIFY `workoutsession_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `workouttypes`
--
ALTER TABLE `workouttypes`
  MODIFY `workouttype_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `workoutsessions`
--
ALTER TABLE `workoutsessions`
  ADD CONSTRAINT `workoutsessions_ibfk_1` FOREIGN KEY (`workouttype_id`) REFERENCES `workouttypes` (`workouttype_id`),
  ADD CONSTRAINT `workoutsessions_ibfk_2` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`workout_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
