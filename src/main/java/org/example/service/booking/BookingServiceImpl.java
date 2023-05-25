package org.example.service.booking;

import org.example.domain.Booking;
import org.example.exception.ObjectNotFoundException;
import org.example.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    // Create a new booking
    @Override
    public Booking createBooking(Booking newBooking) {
        newBooking.setEventId(newBooking.getEventId());
        newBooking.setStudentID(newBooking.getStudentId());
        newBooking.setEventTitle(newBooking.getEventTitle());
        newBooking.setEventLocation(newBooking.getEventLocation());
        newBooking.setEventStartTime(newBooking.getEventStartTime());

        // Save the new booking to the repository
        return bookingRepository.save(newBooking);
    }

    // Get all bookings
    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Get a booking by event ID
    @Override
    public Booking getBookingByEventId(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Get bookings by student ID
    @Override
    public List<Booking> getBookingsByStudentId(String id) {
        // Retrieve all bookings from repositoryu
        List<Booking> bookings = bookingRepository.findAll();
        // Filter bookings by ID
        return bookings.stream()
                .filter(booking -> booking.getStudentId().equals(id))
                .collect(Collectors.toList());
    }

    // Update a booking
    @Override
    public Booking updateBooking(Booking newBooking, Long id) {
        // Find the booking by its ID in the repository
        return bookingRepository.findById(id)
                .map(booking -> {
                    // Update the booking detail
                    booking.setEventId(newBooking.getEventId());
                    booking.setStudentID(newBooking.getStudentId());

                    booking.setEventLocation(newBooking.getEventLocation());
                    booking.setEventStartTime(newBooking.getEventStartTime());
                    booking.setEventTitle(newBooking.getEventTitle());

                    // Save the updated booking in thge repository
                    return bookingRepository.save(booking);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Delete a booking
    @Override
    public List<Booking> deleteBooking(Long id) {
        // Check if the booking exists
        if (!bookingRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        // Delete the boooking from the repository
        bookingRepository.deleteById(id);
        // Return all remaining bookings
        return bookingRepository.findAll();
    }
}
