/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.example.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    public String eventId;

    public String studentId;

    public Booking(){
    }

    public Booking(int bookingId, String eventId, String studentId) {
        this.bookingId = bookingId;
        this.eventId = eventId;
        this.studentId = studentId;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getEventID() {
        return eventId;
    }

    public void setEventID(String eventID) {
        this.eventId = eventID;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentID(String studentId) {
        this.studentId = studentId;
    }
}
