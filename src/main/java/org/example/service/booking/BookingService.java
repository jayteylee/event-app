package org.example.service.booking;

import org.example.domain.Booking;

import java.util.List;

public interface BookingService {

    Booking createBooking(Booking booking);

    List<Booking> getAllBookings();

    Booking getBookingByEventId(Long id);

    Booking updateBooking(Booking newBooking, Long id);

    List<Booking> deleteBooking(Long id);

    List<Booking> getBookingsByStudentId(String id);
}
