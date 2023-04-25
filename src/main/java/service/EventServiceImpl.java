package service;

import domain.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.EventRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventServiceImpl implements EventService  {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public void saveEvent(Event event) {
        eventRepository.save(event);
    }

    @Override
    public List<Event> getAllEvents() {
        Event event = new Event(123456, "Information Science Career Fair", "Career Fair", LocalDateTime.parse("2023-06-01T16:00:00"), LocalDateTime.parse("2023-06-01 16:00:00"), "Information Science", "Career Development", "Owheo Building, Dunedin", 100, "Come meet with potential employers in the Information Science field!");
        return List.of(event);
//        return eventRepository.findAll();
    }

    @Override
    public void updateEvent(Event event) {
        eventRepository.save(event);
    }

    @Override
    public void deleteEvent(Event event) {
        eventRepository.delete(event);
    }
}
