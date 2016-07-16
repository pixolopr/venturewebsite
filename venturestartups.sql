-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2016 at 04:09 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `venturestartups`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE IF NOT EXISTS `access` (
`id` int(11) NOT NULL COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT 'text'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`id`, `name`) VALUES
(1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
`id` int(11) NOT NULL COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT 'text',
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'date',
  `venue` varchar(255) DEFAULT NULL COMMENT 'text',
  `purpose` text COMMENT 'textarea',
  `guest_speaker` varchar(255) DEFAULT NULL COMMENT 'text',
  `image` text COMMENT 'file .png,.jpg'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `timestamp`, `venue`, `purpose`, `guest_speaker`, `image`) VALUES
(10, 'Venture Startups Upcoming Event', '2016-05-27 18:30:00', 'Mumbai', 'Test Event', 'R Ramkumar', '6a27781e53d42d6f2b15b9549a9b8ef9.jpg'),
(11, 'Venture Startups Past Event', '2016-05-01 18:30:00', 'Hyderabad', 'Test Past Event', 'R Ramkumar', '7bedbdbb0204c6453ed2356a41d1ebd4.jpg'),
(12, 'Venture Startups Past Event', '2016-05-01 18:30:00', 'Hyderabad', 'Test Past Event', 'R Ramkumar', '7bedbdbb0204c6453ed2356a41d1ebd4.jpg'),
(13, 'Venture Startups Upcoming Event', '2016-05-27 18:30:00', 'Mumbai', 'Test Event', 'R Ramkumar', '6a27781e53d42d6f2b15b9549a9b8ef9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `eventtag`
--

CREATE TABLE IF NOT EXISTS `eventtag` (
`id` int(11) NOT NULL,
  `eventid` int(11) NOT NULL,
  `tagid` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `eventtag`
--

INSERT INTO `eventtag` (`id`, `eventid`, `tagid`) VALUES
(6, 10, 2),
(7, 11, 2),
(8, 11, 3);

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE IF NOT EXISTS `newsletters` (
`id` int(11) NOT NULL COMMENT 'id',
  `date` date DEFAULT NULL COMMENT 'date',
  `pdf` text NOT NULL COMMENT 'file .pdf'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`id`, `date`, `pdf`) VALUES
(2, '2016-05-18', 'newsletter.pdf'),
(3, '2016-04-18', 'newsletter.pdf'),
(4, '2016-06-18', 'newsletter.pdf'),
(5, '2016-03-18', 'newsletter.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
`id` int(11) NOT NULL COMMENT 'id',
  `image` text NOT NULL COMMENT 'file .png,.jpg',
  `title` varchar(255) DEFAULT NULL COMMENT 'text'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `image`, `title`) VALUES
(11, '1aac6e3166bf3e8f41885346b8efdc3d.jpg', 'After the Presentation'),
(12, '01fe044ac1f670674834611deea2b044.jpg', 'Students listening to the speaker'),
(13, '8889244893474dc513a8142718025003.jpg', 'R Ramkumar delivering his presentation'),
(14, '5b30749134692642a13604dd71a6fc91.jpg', 'Venture Startup team at lunch'),
(15, '6df6c18dee0ad22c634b71a48306e66e.jpg', 'Gifting our guests'),
(16, 'facaab8dd18ed31a2d7fb7e2ee482c93.jpg', 'VSU Event turnup');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
`id` int(11) NOT NULL COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT 'text'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(2, 'Startups'),
(3, 'IT'),
(4, 'Electronics'),
(5, 'Mechanical'),
(6, 'Social'),
(7, 'Manufacture');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL COMMENT 'id',
  `email` varchar(255) NOT NULL COMMENT 'email',
  `password` varchar(255) NOT NULL COMMENT 'password',
  `contact` varchar(10) NOT NULL COMMENT 'tel',
  `subscription` int(1) DEFAULT NULL COMMENT 'yes/no',
  `access` tinyint(1) NOT NULL COMMENT 'dropdown|access|name'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `contact`, `subscription`, `access`) VALUES
(1, 'admin@admin.com', 'f865b53623b121fd34ee5426c792e5c33af8c227', '9820840946', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
`id` int(11) NOT NULL COMMENT 'id',
  `video` text NOT NULL COMMENT 'textarea',
  `title` varchar(255) DEFAULT NULL COMMENT 'text'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventtag`
--
ALTER TABLE `eventtag`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `eventtag`
--
ALTER TABLE `eventtag`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
