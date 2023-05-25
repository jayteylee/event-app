package org.example.controller;

import org.example.domain.Scholarship;
import org.example.service.scholarship.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;

    // Constructor injection for ScholarshipService
    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }

    // Get all scholarships
    @GetMapping("/scholarships")
    List<Scholarship> getAllScholarships() {
        return scholarshipService.getAllScholarships();
    }

    // Get scholarships by ID
    @GetMapping("/scholarships/{id}")
    Scholarship getScholarshipById(@PathVariable Long id) {
        return scholarshipService.getScholarshipById(id);
    }

    // Create a new scholarship
    @PostMapping("/scholarships")
    Scholarship createScholarship(@RequestBody Scholarship scholarship) {
        return scholarshipService.createScholarship(scholarship);
    }

    // Update a scholarship
    @PutMapping("/scholarships/{id}")
    Scholarship updateScholarship(@RequestBody Scholarship scholarship, @PathVariable Long id) {
        return scholarshipService.updateScholarship(scholarship, id);
    }

    // Delete a scholarship
    @DeleteMapping("/scholarships/{id}")
    List<Scholarship> deleteScholarship(@PathVariable Long id) {
        return scholarshipService.deleteScholarship(id);
    }
}
