package controller;

import domain.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.EventService;

import java.util.List;

@Controller
public class EventController {

    @GetMapping("/")
    public static String greeting(){
        return "Welcome!";
    }

    @GetMapping("/home")
    public static String home(){
        return "hello world!";
    }

    @PostMapping("/add/{id}")
    public String add(@RequestBody Event event){
//        eventService.saveEvent(event);
        return "New event added";
    }

//    @GetMapping("/getAll")
//    public List<Event> getAllEvents(){
//        return eventService.getAllEvents();
//    }

    @PostMapping("/update")
    public String updateEvent(@RequestBody Event event){
//        eventService.updateEvent(event);
        return "Event has been updated";
    }

    @PostMapping("/delete")
    public String deleteEvent(@RequestBody Event event){
//        eventService.deleteEvent(event);
        return "Event has been deleted";
    }
}
