package org.example.controller;

import org.example.domain.Event;
import org.example.repository.EventRepository;
import org.example.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class EventController{

    @Autowired
    EventService eventService;

    @GetMapping("/events")
    public ResponseEntity getAllEvents(){
        return ResponseEntity.ok(this.eventService.getAllEvents());
    }

    @PostMapping("/events/{id}")
    Event getEventById (@PathVariable("eventId") Long id){
        return eventService.getEventById(id);
    }

    @PostMapping("/events")
    Event createEvent (@ModelAttribute("event") Event event){
        return eventService.createEvent(event);
    }

    @PostMapping("/events")
    Event updateEvent (@PathVariable("eventId") Long id){
        return eventService.updateEvent(id);
    }

    @GetMapping("/events/delete/{id}")
    public ResponseEntity deleteEvent(@PathVariable("eventId") Long id){
        return ResponseEntity.ok(eventService.deleteEvent(id));
    }

}
