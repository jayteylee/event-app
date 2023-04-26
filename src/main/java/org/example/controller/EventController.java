package org.example.controller;

import org.example.repository.EventRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController{
    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    @GetMapping("/events")
    public ResponseEntity getAllEvents(){
        return ResponseEntity.ok(this.eventRepository.findAll());
    }
}