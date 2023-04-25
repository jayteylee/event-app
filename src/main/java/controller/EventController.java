package controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.EventRepository;

@RestController
@RequestMapping("/events")
public class EventController{
    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    @GetMapping
    public ResponseEntity getAllEvents(){
        return ResponseEntity.ok(this.eventRepository.findAll());
    }
}