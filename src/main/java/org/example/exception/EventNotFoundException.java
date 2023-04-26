package org.example.exception;

public class EventNotFoundException extends RuntimeException{
    public EventNotFoundException(Long id){
        super("Could not found the user with id " + id);
    }
}