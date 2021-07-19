-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2021 at 11:11 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodetest`
--

-- --------------------------------------------------------

--
-- Table structure for table `st_users`
--

CREATE TABLE `st_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL COMMENT 'Name of user',
  `last_name` varchar(100) DEFAULT NULL COMMENT 'last name of user',
  `phone_no` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1 COMMENT '1=> Active, 0=>Inactive',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_users`
--

INSERT INTO `st_users` (`id`, `name`, `last_name`, `phone_no`, `email`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Satish', 'Kumar', '234567', 'anuanurag377@gmial.com', 1, '2021-07-19 06:02:03', '2021-07-19 06:02:03'),
(2, 'gcygfcsd', 'jvhgsc', '8765467', 'sccsd@hgvhgd', 1, '2021-07-19 06:07:26', '2021-07-19 06:07:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `st_users`
--
ALTER TABLE `st_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `st_users_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `st_users`
--
ALTER TABLE `st_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
