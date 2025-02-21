-- Create the database
CREATE DATABASE IF NOT EXISTS library_db;

-- Use the database
USE library_db;

-- Create the Library table
CREATE TABLE IF NOT EXISTS `Library` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(255) NOT NULL
);