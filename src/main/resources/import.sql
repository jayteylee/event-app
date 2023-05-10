INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (11, 'Information Science Career Fair', 'Career Fair', '2023-06-01 09:00:00', '2023-06-01 16:00:00', 'Owheo Building, Dunedin', 100, 'Come meet with potential employers in the Information Science field!');
INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (22, 'Introduction to Python Programming', 'Workshop', '2023-05-15 10:00:00', '2023-05-15 12:00:00', 'Saint David Theatre, Dunedin', 30, 'This workshop will teach you the basics of programming with Python.');
INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (43, 'Dummies Guide to Server Infrastructure', 'Workshop', '2023-05-17 11:00:00', '2023-05-17 13:00:00', 'Burns 4, Dunedin', 20, 'This workshop will introduce you to server deployment and maintenece for commercial use');
INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (55, 'AI, What Could Go Wrong ?', 'Debate', '2023-05-13 14:00:00', '2023-05-15 16:00:00', 'Saint David Theatre, Dunedin', 40, 'Students go head to head in a debate of on the impact of AI and how it concerns our futures');
INSERT INTO Event (event_id, title, type, start_time, end_time, location, capacity, description) VALUES (67, 'Why You Should Quit Computer Science', 'Speech', '2023-05-15 10:00:00', '2023-05-15 12:00:00', 'Quad 4, Dunedin', 25, 'Lighthearted disscussion about a career in Computer Science and Software Engineering and Growing Pains of the workforce');


-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0123456', 'password', 'Hemi', 'Smith', 'hemi.smith@example.com', '0211234567', '1998-07-15', 'Bachelor of Information Science', 'Software Development', 'Ngati Porou');

-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0345678', 'password', 'Te Aroha', 'Brown', 'tearoha.brown@example.com', '0274567890', '1999-04-03', 'Bachelor of Information Science', 'Information Technology Management', 'Ngai Tahu');

INSERT INTO Booking (booking_id, eventid, studentid) VALUES ('12424124','11', 'H0345678');
INSERT INTO Booking (booking_id, eventid, studentid) VALUES ('14527318','22', 'J0323923');
INSERT INTO Booking (booking_id, eventid, studentid) VALUES ('12121212','43', 'M0345678');

INSERT INTO Liason (liason_id, location, start_time, title) VALUES (98, 'Owheo building', '2023-05-12 09:00:00', 'AI opportunities discussion');
INSERT INTO Liason (liason_id, location, start_time, title) VALUES (99, 'Quad 4', '2023-06-17 10:00:00', 'Data Science Theory and Working Application');
INSERT INTO Liason (liason_id, location, start_time, title) VALUES (100, 'Burns 5', '2023-05-17 13:00:00', 'Computation Modelling and AI optimisation');
INSERT INTO Liason (liason_id, location, start_time, title) VALUES (101, 'Archaway 2', '2023-05-13 11:00:00', 'Reducing Redundancy in University Infrastructure');
INSERT INTO Liason (liason_id, location, start_time, title) VALUES (102, 'Owheo building', '2023-05-24 09:00:00', 'AI opportunities discussion : part 2');
INSERT INTO Liason (liason_id, location, start_time, title) VALUES (15, 'Owheo Building', '2023-05-01 09:00:00', 'Academic Advising');

INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (10, 'Maori Information Science Scholarship', 2, 'Information Science', 'Merit-based');
INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (11, 'Jen Ear Oss Information Science Scholarship', 5, 'Information Science', 'Merit-based');
INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (13, 'Bamforth Postgraduate Scholarshipt', 1, 'Information Science', 'Merit-based');
INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (14, 'Blair Postgraduate Scholarship', 2, 'Computer Science', 'Research-based');
INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (15, 'Diane Campbell-Hunt Memorial Award', 3, 'Information Science', 'Contribution-based');

INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (111, 'AI Research Internship', 'Internship', 'Artificial Intelligence');
INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (112, 'Database Optimisation Summer Research Project', 'Research Project', 'Databases');
INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (113, 'Videogame AI developement and research', 'Research Project', 'Video Game Development');
INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (114, 'Dunedin Data Infrastructure Optimisation', 'Internship', 'Data Science');
INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (115, 'Data Security', 'Research Project', 'Cyber Security');


INSERT INTO Student (student_id, name, email, password, dob) VALUES (123456789, 'Lachy Kitchen', 'kitla230@student.otago.ac.nz', 'apple123', '2000-06-24');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (987654321, 'Jay Lee', 'leeja744@student.otago.ac.nz', '321', '1942-1-4');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (111111, 'Call', 'cal', '987', '1989-09-02');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (1, 'Mahfuz', 'fuz', '420', '2010-10-10');

INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (3976743, 'leeja744@staff.otago.ac.nz', 'Jay', 'Lee', '123', '0211234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (2976743, 'cal@staff.otago.ac.nz', 'Cal', 'Keenan', '123', '0271234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (1976743, 'jay@staff.otago.ac.nz', 'Jay', 'Lee', '123', '0221234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (0976743, 'lac@staff.otago.ac.nz', 'Lachy', 'Kitchen', '123', '0231234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (4976743, 'mah@staff.otago.ac.nz', 'Mahfuz', 'Abdul', '123', '0241234567');
