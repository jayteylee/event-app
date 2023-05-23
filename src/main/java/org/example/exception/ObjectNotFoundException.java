package org.example.exception;

public class ObjectNotFoundException extends RuntimeException{
    public ObjectNotFoundException(Long id){
        super("Could not found the user with id " + id);
    }

    public ObjectNotFoundException(String email){
        super("Could not found the user with email " + email);
    }
}