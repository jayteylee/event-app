-- Example Data

INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
VALUES ('M0123456', 'password', 'Hemi', 'Smith', 'hemi.smith@example.com', '0211234567', '1998-07-15', 'Bachelor of Information Science', 'Software Development', 'Ngati Porou');

INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
VALUES ('M0345678', 'password', 'Te Aroha', 'Brown', 'tearoha.brown@example.com', '0274567890', '1999-04-03', 'Bachelor of Information Science', 'Information Technology Management', 'Ngai Tahu');

INSERT INTO Staff (staffID, password, firstName, lastName, email, phoneNumber)
VALUES ('S0123456', 'password', 'Aroha', 'Jones', 'aroha.jones@example.com', '03 479 1234');

INSERT INTO Staff (staffID, password, firstName, lastName, email, phoneNumber)
VALUES ('S0456789', 'password', 'Tama', 'Smith', 'tama.smith@example.com', '03 479 2345');

INSERT INTO Event (eventID, title, type, startTime, endTime, subject, category, location, capacity, description)
VALUES ('E0123456', 'Information Science Career Fair', 'Career Fair', '2023-06-01 09:00:00', '2023-06-01 16:00:00', 'Information Science', 'Career Development', 'Owheo Building, Dunedin', 100, 'Come meet with potential employers in the Information Science field!');

INSERT INTO Event (eventID, title, type, startTime, endTime, subject, category, location, capacity, description)
VALUES ('E0456789', 'Introduction to Python Programming', 'Workshop', '2023-05-15 10:00:00', '2023-05-15 12:00:00', 'Information Science', 'Programming', 'Owheo Building, Dunedin', 30, 'This workshop will teach you the basics of programming with Python.');

INSERT INTO Booking (eventID, studentID)
VALUES ('E0123456', 'M0123456');

INSERT INTO Booking (eventID, studentID)
VALUES ('E0456789', 'M0345678');

INSERT INTO Liason (title, staffID, studentID, startTime, location)
VALUES ('Academic Advising', 'S0123456', 'M0123456', '2023-05-01 09:00:00', 'Owheo Building, Dunedin');

INSERT INTO Scholarship (name, staffID, studentID, type, subject, numAvailable)
VALUES ('Maori Information Science Scholarship', 'S0456789', 'M0345678', 'Merit-based', 'Information Science', 2);

INSERT INTO ResearchOpportunity (title, staffID, studentID, type, subject)
VALUES ('AI Research Internship', 'S0123456', 'M0123456', 'Internship', 'Artificial Intelligence');
