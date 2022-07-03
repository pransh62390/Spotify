-- SHOW DATABASES;

-- Use this file first to create the database and tables for the first time.

-- TODO: Create database
CREATE DATABASE spotify;
USE spotify;
SELECT DATABASE();

-- TODO: Create artist table
CREATE TABLE artist (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  dob VARCHAR(15) NOT NULL,
  bio VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
DESC artist;

-- TODO: Create song table
CREATE TABLE song (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  rls_date VARCHAR(15) NOT NULL,
  conver_img VARCHAR(255),
  artists VARCHAR(255),
  artistsNames VARCHAR(255);
  PRIMARY KEY (id)
);
DESC song;

-- TODO: Create user table
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id, email)
);
DESC user;


-- TODO: Create rating table
CREATE TABLE rating (
  user INT NOT NULL,
  song INT NOT NULL,
  rating float NOT NULL,
  PRIMARY KEY (user, song)
);
DESC rating;
