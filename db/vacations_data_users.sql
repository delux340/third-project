-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations_data
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT 'member',
  `salt` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'afikbahar@gmail.com','$2a$10$oYX6TWdKewaf/RmuMgiYMul3mNqT//yNvI5sxj1vlpjQvfnaVumQy',NULL,NULL,'admin','$2a$10$oYX6TWdKewaf/RmuMgiYMu'),(11,'test@gmail.com','$2a$10$sLQNPOwV4rtFVprnlmf6MeG5xL8uM9HVSwTEfk5B0/tjJM3L2K3mK','test','test','member','$2a$10$sLQNPOwV4rtFVprnlmf6Me'),(12,'testa@gmail.com','$2a$10$rHXH2eW61XPwfrZmkq9Lp.zrCv9TvY0NX1Lx7hl4bdXKFE31kkdZW','testa','testa','member','$2a$10$rHXH2eW61XPwfrZmkq9Lp.'),(13,'salt@gmail.com','$2a$10$3rOTaVLEDDTzfEDsnTsRPexH4S4ePyZ5y6w3g.XOzzMwIfHgGEDu.','salt','salt','member','$2a$10$3rOTaVLEDDTzfEDsnTsRPe'),(14,'saltsalt@gmail.com','$2a$10$hMwgN2O6rFocHeRvw/L9NuNWM69542Qa2nDhJ/MUs9IN75WJoNeEa','saltsalt','saltsalt','member','$2a$10$hMwgN2O6rFocHeRvw/L9Nu'),(15,'salt34@gmail.com','$2a$10$1XI2w5INQKKMvnJuKof3Fu4/uhwzFcHU1UlHzxe/sgaCsJW8pvVq.','salt34','salt34','member','$2a$10$1XI2w5INQKKMvnJuKof3Fu'),(16,'test01@gmail.com','$2a$10$U9K4W3z2CyEyjIuvy/GbSude4nkC51GVFls270xHRSzRAmrZ4V.M2','test01','test01','member','$2a$10$U9K4W3z2CyEyjIuvy/GbSu'),(17,'tes1t@gmail.com','$2a$10$a.LaJlbX9ZKnYyQ9wPS5GeTc4nMzXj7JyaamLteaOUEWKUjmmlzkW','test','test','member','$2a$10$a.LaJlbX9ZKnYyQ9wPS5Ge');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-18 19:35:24
