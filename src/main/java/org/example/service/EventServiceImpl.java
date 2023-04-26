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

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event createEvent(Event newEvent) {
        return eventRepository.save(newEvent);
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
    public Event updateEvent(Event newEvent, Long id) {
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
    public Event deleteEvent(Long id){
        if(!eventRepository.existsById(id)){
            throw new EventNotFoundException(id);
        }
        Event event = eventRepository.getReferenceById(id);
        eventRepository.deleteById(id);
        return event;
    }
}
