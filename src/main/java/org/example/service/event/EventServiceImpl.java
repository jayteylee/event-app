package org.example.service.event;

import org.example.domain.Event;
import org.example.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.repository.EventRepository;

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
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    @Override
    public Event updateEvent(Event newEvent, Long id) {
        return eventRepository.findById(id)
                .map(event -> {
                    System.out.println(event.getEventID() + " " + newEvent.getCapacity());
                    event.setTitle(newEvent.getTitle());
                    event.setType(newEvent.getType());
                    event.setStartTime(newEvent.getStartTime());
                    event.setEndTime(newEvent.getEndTime());
                    event.setSubject(newEvent.getSubject());
                    event.setLocation(newEvent.getLocation());
                    event.setCapacity(newEvent.getCapacity());
                    event.setDescription(newEvent.getDescription());
                    return eventRepository.save(event);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }


    @Override
    public List<Event> deleteEvent(Long id){
        if(!eventRepository.existsById(id)){
            throw new ObjectNotFoundException(id);
        }
        eventRepository.deleteById(id);
        return eventRepository.findAll();
    }
}
