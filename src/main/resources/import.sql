INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (11, 'Information Science Career Fair', 'Career Fair', '2023-06-01 09:00:00', '2023-06-01 16:00:00', 'Owheo Building, Dunedin', 100, 'Come meet with potential employers in the Information Science field!');
INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (22, 'Introduction to Python Programming', 'Workshop', '2023-05-15 10:00:00', '2023-05-15 12:00:00', 'Saint David Theatre, Dunedin', 30, 'This workshop will teach you the basics of programming with Python.');

-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0123456', 'password', 'Hemi', 'Smith', 'hemi.smith@example.com', '0211234567', '1998-07-15', 'Bachelor of Information Science', 'Software Development', 'Ngati Porou');

-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0345678', 'password', 'Te Aroha', 'Brown', 'tearoha.brown@example.com', '0274567890', '1999-04-03', 'Bachelor of Information Science', 'Information Technology Management', 'Ngai Tahu');

-- INSERT INTO Staff (staffID, password, firstName, lastName, email, phoneNumber)
-- VALUES ('S0123456', 'password', 'Aroha', 'Jones', 'aroha.jones@example.com', '03 479 1234');

-- INSERT INTO Staff (staffID, password, firstName, lastName, email, phoneNumber)
-- VALUES ('S0456789', 'password', 'Tama', 'Smith', 'tama.smith@example.com', '03 479 2345');

-- INSERT INTO Booking (eventID, studentID)
-- VALUES ('E0123456', 'M0123456');

-- INSERT INTO Booking (eventID, studentID)
-- VALUES ('E0456789', 'M0345678');

-- INSERT INTO Liason (title, staffID, studentID, startTime, location)
-- VALUES ('Academic Advising', 'S0123456', 'M0123456', '2023-05-01 09:00:00', 'Owheo Building, Dunedin');

INSERT INTO Liason (liason_id, location, start_time, title) VALUES (15, 'Owheo Building', '2023-05-01 09:00:00', 'Academic Advising');

INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (10, 'Maori Information Science Scholarship', 2, 'Information Science', 'Merit-based');

INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (111, 'AI Research Internship', 'Internship', 'Artificial Intelligence');

INSERT INTO Student (student_id, name, email, password, dob) VALUES (123456789, 'Lachy Kitchen', 'kitla230@student.otago.ac.nz', 'apple123', '2000-06-24');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (987654321, 'Jay Lee', 'leeja744@student.otago.ac.nz', '321', '1942-1-4');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (111111, 'Call', 'cal', '987', '1989-09-02');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (1, 'Mahfuz', 'fuz', '420', '2010-10-10');

INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (3976743, 'leeja744@staff.otago.ac.nz', 'Jay', 'Lee', '123', '0211234567');
