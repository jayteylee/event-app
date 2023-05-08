package org.example.controller;

import org.example.domain.Event;
import org.example.service.event.EventService;
import org.example.service.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/login/{email}/{password}")
    Boolean authenticate(@PathVariable("email") String email, @PathVariable("password") String password) {
        return staffService.authenticate(email, password);
    }
}
