package org.example.service;

import org.example.domain.Event;
import org.example.exception.EventNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.example.repository.EventRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EventServiceImpl implements EventService  {

    private final EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException(id));
    }

    @Override
    public Event updateEvent(Long id) {
        return null;
    }

    @Override
    @PutMapping("/user/{id}")
    public Event updateUser(@RequestBody Event newEvent, @PathVariable Long id) {
        return eventRepository.findById(id)
                .map(event -> {
                    event.setTitle(newEvent.getTitle());
                    event.setType(newEvent.getType());
                    event.setStartTime(newEvent.getStartTime());
                    event.setEndTime(newEvent.getEndTime());
                    event.setSubject(newEvent.getSubject());
                    event.setLocation(newEvent.getLocation());
                    event.setCategory(newEvent.getCategory());
                    event.setDescription(newEvent.getDescription());
                    return eventRepository.save(event);
                }).orElseThrow(() -> new EventNotFoundException(id));
    }


    @Override
    @DeleteMapping("/user/{id}")
    public Event deleteEvent(@PathVariable Long id){
        if(!eventRepository.existsById(id)){
            throw new EventNotFoundException(id);
        }
        eventRepository.deleteById(id);
        return eventRepository.getReferenceById(id);
    }
}
