package org.example.controller;

import org.example.model.Event;
import org.example.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController{

    @Autowired
    EventRepository eventRepository;

    @GetMapping("/events")
    public ResponseEntity getAllEvents(){
        return ResponseEntity.ok(this.eventRepository.findAll());
    }

    @PostMapping("/events")
    Event newEvent (@RequestBody Event newEvent){
        return eventRepository.save(newEvent);
    }
}
