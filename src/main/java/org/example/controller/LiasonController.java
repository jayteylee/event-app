package org.example.controller;

import org.example.domain.Liason;
import org.example.service.liason.LiasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LiasonController {

    @Autowired
    private LiasonService liasonService;

    public LiasonController(LiasonService liasonService) {
        this.liasonService = liasonService;
    }

    @GetMapping("/liasons")
    List<Liason> getAllLiasons(){
        return liasonService.getAllLiasons();
    }

    @GetMapping("/liasons/{id}")
    Liason getLiasonById(@PathVariable Long id) {
        return liasonService.getLiasonById(id);
    }

    @PostMapping("/liasons")
    Liason createLiason(@RequestBody Liason liason){
        return liasonService.createLiason(liason);
    }

    @PutMapping("/liasons/{id}")
    Liason updateLiason(@RequestBody Liason liason, @PathVariable Long id){
        return liasonService.updateLiason(liason, id);
    }

    @DeleteMapping("/liasons/{id}")
    List<Liason> deleteLiason(@PathVariable Long id) {
        return liasonService.deleteLiason(id);
    }
}
