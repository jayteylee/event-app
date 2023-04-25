DROP TABLE IF EXISTS ResearchOpportunity;
DROP TABLE IF EXISTS Scholarship;
DROP TABLE IF EXISTS Liason;
DROP TABLE IF EXISTS Booking;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Staff;
DROP TABLE IF EXISTS Student;

CREATE TABLE student (
    id CHAR(8) PRIMARY KEY,
    name VARCHAR(70),
    email VARCHAR(100),
    dob DATE
);

CREATE TABLE Staff (
    staffID CHAR(8) PRIMARY KEY,
    password VARCHAR(70) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(50)
);

CREATE TABLE Event (
    eventID CHAR(8) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    type VARCHAR(100),
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP,
    subject VARCHAR(100),
    category VARCHAR(100),
    location VARCHAR(100) NOT NULL,
    capacity SMALLINT,
    description TEXT
);

CREATE TABLE Booking (
    eventID CHAR(8) NOT NULL,
    studentID CHAR(8) NOT NULL,
    PRIMARY KEY (eventID, studentID),
    FOREIGN KEY (studentID) REFERENCES Student (studentID),
    FOREIGN KEY (eventID) REFERENCES Event (eventID)
);

CREATE TABLE Liason (
    title VARCHAR(100) NOT NULL,
    staffID CHAR(8) NOT NULL,
    studentID CHAR(8) NOT NULL,
    startTime TIMESTAMP NOT NULL, 
    location VARCHAR(100) NOT NULL,
    PRIMARY KEY (studentID, staffID, startTime),
    FOREIGN KEY (studentID) REFERENCES Student (studentID),
    FOREIGN KEY (staffID) REFERENCES Staff (staffID)
); 

CREATE TABLE Scholarship (
    name VARCHAR(100) NOT NULL,
    staffID CHAR(8) NOT NULL,
    studentID CHAR(8) NOT NULL,
    type VARCHAR(100),
    subject VARCHAR(100),
    numAvailable SMALLINT,
    PRIMARY KEY (studentID, staffID, name),
    FOREIGN KEY (studentID) REFERENCES Student (studentID),
    FOREIGN KEY (staffID) REFERENCES Staff (staffID)
);

CREATE TABLE ResearchOpportunity (
    title VARCHAR(100),
    staffID CHAR(8) NOT NULL,
    studentID CHAR(8) NOT NULL,
    type VARCHAR(100),
    subject VARCHAR(100),
    PRIMARY KEY (studentID, staffID, title),
    FOREIGN KEY (studentID) REFERENCES Student (studentID),
    FOREIGN KEY (staffID) REFERENCES Staff (staffID)
);

