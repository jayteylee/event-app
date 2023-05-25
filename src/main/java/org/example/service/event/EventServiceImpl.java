package org.example.service.event;

import org.example.domain.Event;
import org.example.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.repository.EventRepository;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    // Create a new event
    @Override
    public Event createEvent(Event newEvent) {
        return eventRepository.save(newEvent);
    }

    // Get all events
    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Get event by ID
    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Update event
    @Override
    public Event updateEvent(Event newEvent, Long id) {
        // FInd an event by ID in the repository
        return eventRepository.findById(id)
                .map(event -> {
                    // Update the event details
                    System.out.println(event.getEventID() + " " + newEvent.getCapacity());
                    event.setTitle(newEvent.getTitle());
                    event.setType(newEvent.getType());
                    event.setStartTime(newEvent.getStartTime());
                    event.setEndTime(newEvent.getEndTime());
                    event.setLocation(newEvent.getLocation());
                    event.setCapacity(newEvent.getCapacity());
                    event.setDescription(newEvent.getDescription());
                    event.setSubject(newEvent.getSubject());
                    // Save the updated event in the repository
                    return eventRepository.save(event);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Delete an event
    @Override
    public List<Event> deleteEvent(Long id) {
        // Check if the event exists
        if (!eventRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        // Delete the event from the repository
        eventRepository.deleteById(id);
        // Return all remaining events
        return eventRepository.findAll();
    }
}
