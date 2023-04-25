package service;

import domain.Event;
import java.util.List;

public interface EventService {

    void saveEvent(Event event);

    List<Event> getAllEvents();

    void updateEvent(Event event);

    void deleteEvent(Event event);
}
