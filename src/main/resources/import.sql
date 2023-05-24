INSERT INTO Event (event_id, title, type, start_time, end_time, subject, location, capacity, description) VALUES (11, 'Information Science Career Fair', 'Career Fair', '2023-06-01 09:00:00', '2023-06-01 16:00:00', 'Information Science', 'Owheo Building, Dunedin', 100, 'Come meet with potential employers in the Information Science field!');
INSERT INTO Event (event_id, title, type, start_time, end_time, subject, location, capacity, description) VALUES (22, 'Introduction to Python Programming', 'Workshop', '2023-05-15 10:00:00', '2023-05-15 12:00:00', 'Computer Science', 'Saint David Theatre, Dunedin', 30, 'This workshop will teach you the basics of programming with Python.');

-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0123456', 'password', 'Hemi', 'Smith', 'hemi.smith@example.com', '0211234567', '1998-07-15', 'Bachelor of Information Science', 'Software Development', 'Ngati Porou');

-- INSERT INTO Student (studentID, password, firstName, lastName, email, phoneNumber, DOB, degree, major, iwi)
-- VALUES ('M0345678', 'password', 'Te Aroha', 'Brown', 'tearoha.brown@example.com', '0274567890', '1999-04-03', 'Bachelor of Information Science', 'Information Technology Management', 'Ngai Tahu');

INSERT INTO Booking (booking_id, event_id, student_id) VALUES ('12424124','G0456789', 'H0345678');

INSERT INTO Booking (booking_id, event_id, student_id) VALUES ('12121212','E0456789', 'M0345678');

INSERT INTO Liason (liason_id, location, start_time, title) VALUES (98, 'Owheo building', '2023-05-12 09:00:00', 'AI opportunities discussion');

INSERT INTO Liason (liason_id, location, start_time, title) VALUES (15, 'Owheo Building', '2023-05-01 09:00:00', 'Academic Advising');

INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (10, 'Maori Information Science Scholarship', 2, 'Information Science', 'Merit-based');
INSERT INTO Scholarship (scholarship_id, name, num_available, subject, type) VALUES (11, 'Jen Ear Oss Information Science Scholarship', 5, 'Information Science', 'Merit-based');

INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (111, 'AI Research Internship', 'Internship', 'Artificial Intelligence');
INSERT INTO Research_opportunity (opportunity_id, title, type, subject) VALUES (101, 'Database Optimisation Summer Research Project', 'Research Project', 'Databases');

INSERT INTO Student (student_id, name, email, password, dob) VALUES (2938475, 'LKAdmin', 'kitla230@student.otago.ac.nz', 'apple123', '2000-06-24');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (56473829, 'JLAdmin', 'leeja744@student.otago.ac.nz', '321', '1942-1-4');

INSERT INTO Student (student_id, name, email, password, dob) VALUES (123456789, 'Lachy Kitchen', 'kitla23@gmail.com', '9e1fee7c-d594-4f26-99ff-10465e1b36d5', '2000-06-24');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (987654321, 'Jay Lee', 'leeja123@gmail.com', '0cb3442b-dcc6-41a1-9203-b3940eead052', '1942-1-4');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (111111, 'Call', 'cal@gmail.com', '27392bdc-8d84-4416-a55a-115ea88d9194', '1989-09-02');
INSERT INTO Student (student_id, name, email, password, dob) VALUES (1, 'Mahfuz', 'fuz@gmail.com', '010f2042-af58-4626-ba5d-3ad53e826b51', '2010-10-10');

INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (3976743, 'leeja744@staff.otago.ac.nz', 'Jay', 'Lee', '0211234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (2976743, 'cal@staff.otago.ac.nz', 'Cal', 'Keenan', '123', '0271234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (1976743, 'jay@staff.otago.ac.nz', 'Jay', 'Lee', '123', '0221234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (0976743, 'lac@staff.otago.ac.nz', 'Lachy', 'Kitchen', '123', '0231234567');
INSERT INTO Staff (staff_id, email, first_name, last_name, password, phone_number) VALUES (4976743, 'mah@staff.otago.ac.nz', 'Mahfuz', 'Abdul', '123', '0241234567');
