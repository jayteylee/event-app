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

    @Override
    public Booking createBooking(Booking newBooking) {
        return bookingRepository.save(newBooking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBookingByEventId(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    @Override
    public List<Booking> getBookingsByStudentId(String id) {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings.stream()
                .filter(booking -> booking.getStudentId().equals(id))
                .collect(Collectors.toList());
    }


    @Override
    public Booking updateBooking(Booking newBooking, Long id) {
        return bookingRepository.findById(id)
                .map(booking -> {
                    booking.setEventID(newBooking.getEventID());
                    booking.setStudentID(newBooking.getStudentId());
                    return bookingRepository.save(booking);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }


    @Override
    public List<Booking> deleteBooking(Long id){
        if(!bookingRepository.existsById(id)){
            throw new ObjectNotFoundException(id);
        }
        bookingRepository.deleteById(id);
        return bookingRepository.findAll();
    }
}
