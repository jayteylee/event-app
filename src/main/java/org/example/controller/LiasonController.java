package org.example.controller;

import org.example.domain.Liason;
import org.example.service.liason.LiasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LiasonController {

    @Autowired
    private LiasonService liasonService;

    // Constructor injection for EventService
    public LiasonController(LiasonService liasonService) {
        this.liasonService = liasonService;
    }

    // Get all liasons
    @GetMapping("/liasons")
    List<Liason> getAllLiasons() {
        return liasonService.getAllLiasons();
    }

    // Get liason by ID
    @GetMapping("/liasons/{id}")
    Liason getLiasonById(@PathVariable Long id) {
        return liasonService.getLiasonById(id);
    }

    // Create a new liason
    @PostMapping("/liasons")
    Liason createLiason(@RequestBody Liason liason) {
        return liasonService.createLiason(liason);
    }

    // Update a liason
    @PutMapping("/liasons/{id}")
    Liason updateLiason(@RequestBody Liason liason, @PathVariable Long id) {
        return liasonService.updateLiason(liason, id);
    }

    // Delete a liason
    @DeleteMapping("/liasons/{id}")
    List<Liason> deleteLiason(@PathVariable Long id) {
        return liasonService.deleteLiason(id);
    }
}
