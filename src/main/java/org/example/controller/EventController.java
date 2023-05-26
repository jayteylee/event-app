package org.example.controller;

import org.example.domain.Event;
import org.example.service.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EventController {

    @Autowired
    private EventService eventService;

    // Constructor injection for EventService
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // Get all events
    @GetMapping("/events")
    List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get event by ID
    @GetMapping("/events/{id}")
    Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

    // Create a new event
    @PostMapping("/events")
    Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    // Update an event
    @PutMapping("/events/{id}")
    Event updateEvent(@RequestBody Event event, @PathVariable Long id) {
        return eventService.updateEvent(event, id);
    }

    // Delete an event
    @DeleteMapping("/events/{id}")
    List<Event> deleteEvent(@PathVariable Long id) {
        return eventService.deleteEvent(id);
    }
}
