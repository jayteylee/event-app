package org.example.service;

import org.example.domain.Event;

import java.util.List;

public interface EventService {

    Event createEvent(Event event);

    List<Event> getAllEvents();

    Event getEventById(Long id);

    Event updateEvent(Event newEvent, Long id);

    List<Event> deleteEvent(Long id);
}
