package org.example.service.student;

import org.example.domain.Student;

import java.util.List;

public interface StudentService {

    Student createStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student updateStudent(Student newStudent, Long id);

    List<Student> deleteStudent(Long id);
}
