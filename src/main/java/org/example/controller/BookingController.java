package org.example.controller;

import org.example.domain.Booking;
import org.example.service.booking.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

import static java.lang.Long.parseLong;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/bookings")
    List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @GetMapping("/bookings/event/{id}")
    Booking getBookingByEventId(@PathVariable Long id) {
        return bookingService.getBookingByEventId(id);
    }

    @GetMapping("/bookings/student/{id}")
    List<Booking> getBookingByStudentId(@PathVariable String id) {
        return bookingService.getBookingsByStudentId(id);
    }

    @PostMapping("/bookings")
    Booking createBooking(@RequestBody Booking booking){
        return bookingService.createBooking(booking);
    }

    @PutMapping("/bookings/{id}")
    Booking updateBooking(@RequestBody Booking booking, @PathVariable Long id){
        return bookingService.updateBooking(booking, id);
    }

    @DeleteMapping("/bookings/{id}")
    List<Booking> deleteBooking(@PathVariable Long id) {
        return bookingService.deleteBooking(id);
    }
}
