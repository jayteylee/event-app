package org.example.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.example.domain.Event;
import org.example.service.event.EventService;
import org.example.service.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StaffController{

    @Autowired
    private StaffService staffService;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

//    @GetMapping("/login/{email}/{password}")
//    Boolean authenticate(@PathVariable("email") String email, @PathVariable("password") String password) {
//        return staffService.authenticate(email, password);
//    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Validate the username and password against your database or authentication provider
        boolean isValidCredentials = staffService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
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
}

