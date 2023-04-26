package org.example.controller;

import org.example.domain.Event;
import org.example.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EventController{

    @Autowired
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("/events/{id}")
    Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

    @PostMapping("/events")
    Event createEvent(@RequestBody Event event){
        return eventService.createEvent(event);
    }

    @PutMapping("/events/{id}")
    Event updateEvent(@RequestBody Event event, @PathVariable Long id){
        return eventService.updateEvent(event, id);
    }

    @DeleteMapping("/events/{id}")
    List<Event> deleteEvent(@PathVariable Long id) {
        return eventService.deleteEvent(id);
    }
}