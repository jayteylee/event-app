package org.example.service.student;

import org.example.domain.Staff;
import org.example.domain.Student;
import org.example.exception.ObjectNotFoundException;
import org.example.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Creates student
    @Override
    public Student createStudent(Student newStudent) {
        return studentRepository.save(newStudent);
    }

    // Gets all students
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Gets students by email
    @Override
    public Student getStudentByEmail(String email) {
        return studentRepository.findByEmail(email)
                .orElseThrow(() -> new ObjectNotFoundException(email));
    }

    // Gets students by ID
    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Updates students
    @Override
    public Student updateStudent(Student newStudent, Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setName(newStudent.getName());
                    student.setEmail(newStudent.getEmail());
                    student.setPassword(newStudent.getPassword());
                    student.setDob(newStudent.getDob());
                    return studentRepository.save(student);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Deletes Students
    @Override
    public List<Student> deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return studentRepository.findAll();
    }

    // Authentication
    @Override
    public Boolean authenticate(String email, String password) {
        Optional<Student> studentOptional = studentRepository.findByEmailAndPassword(email, password);

        return studentOptional.isPresent();
    }
}
