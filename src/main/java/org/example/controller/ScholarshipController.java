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

    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }

    @GetMapping("/scholarships")
    List<Scholarship> getAllScholarships(){
        return scholarshipService.getAllScholarships();
    }

    @GetMapping("/scholarships/{id}")
    Scholarship getScholarshipById(@PathVariable Long id) {
        return scholarshipService.getScholarshipById(id);
    }

    @PostMapping("/scholarships")
    Scholarship createScholarship(@RequestBody Scholarship scholarship){
        return scholarshipService.createScholarship(scholarship);
    }

    @PutMapping("/scholarships/{id}")
    Scholarship updateScholarship(@RequestBody Scholarship scholarship, @PathVariable Long id){
        return scholarshipService.updateScholarship(scholarship, id);
    }

    @DeleteMapping("/scholarships/{id}")
    List<Scholarship> deleteScholarship(@PathVariable Long id) {
        return scholarshipService.deleteScholarship(id);
    }
}
