package org.example.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.example.domain.Student;
import org.example.login.LoginRequest;
import org.example.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController{

    @Autowired
    private StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/student/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Validate the username and password against your database or authentication provider
        boolean isValidCredentials = studentService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (isValidCredentials) {
            // Create a JWT using the user's username as the subject and a secret key
            String jwt = Jwts.builder()
                    .setSubject(loginRequest.getEmail())
                    .signWith(Keys.secretKeyFor(SignatureAlgorithm.HS256))
                    .compact();
            // Return the JWT in the response body
            return ResponseEntity.ok(jwt);
        } else {
            // Return an unauthorized status code if the credentials are invalid
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/students")
    List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping("/students/{id}")
    Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/students")
    Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }

    @PutMapping("/students/{id}")
    Student updateStudent(@RequestBody Student student, @PathVariable Long id){
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/students/{id}")
    List<Student> deleteStudent(@PathVariable Long id) {
        return studentService.deleteStudent(id);
    }
}
