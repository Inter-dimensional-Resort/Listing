DROP DATABASE if exists info;

CREATE DATABASE info;

USE DATABASE info

CREATE TABLE info (
	city VARCHAR(100) NOT NULL,
	title VARCHAR(100) NOT NULL,
	hostImage VARCHAR(255) NOT NULL,
	roomInfo VARCHAR(100) NOT NULL,
	numberOfGuests INT NOT NULL,
	numberOfBedrooms INT NOT NULL,
	numberOfBeds INT NOT NULL,
	numberOfBaths INT NOT NULL,
	isSuperhost BOOLEAN,
	isGreatLocation BOOLEAN,
	isSparklingClean BOOLEAN,
	isGreatCheckIn BOOLEAN,
	isSelfCheckIn BOOLEAN,
	roomDescription VARCHAR NOT NULL,
	hasWiFi BOOLEAN,
	hasEssentials BOOLEAN,
	hasCable BOOLEAN,
	hasLaptopSpace BOOLEAN,
	hasHeating BOOLEAN,
	hasKitchen BOOLEAN,
	hasPillowsBlankets BOOLEAN,
	sleepingArrangements_bedroom INT NOT NULL,
	ID SERIAL PRIMARY KEY
);

COPY info FROM './db.csv' DELIMITER ',' SCV HEADER;