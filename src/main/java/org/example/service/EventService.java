package org.example.service;

import org.example.domain.Event;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface EventService {

    Event createEvent(Event event);

    List<Event> getAllEvents();

    Event getEventById(Long id);

    Event updateEvent(Long id);

    Event updateUser(Event newEvent, Long id);

    Event deleteEvent(Long id);
}
