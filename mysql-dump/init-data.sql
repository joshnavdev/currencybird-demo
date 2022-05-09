CREATE TABLE `customer` (
  `id` varchar(36) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fdb2f3ad8115da4c7718109a6e` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO customer VALUES ('id', 'Test', 'test@test.com', 'Jr. Alfonso Ugarte', 'MASCULINO');
