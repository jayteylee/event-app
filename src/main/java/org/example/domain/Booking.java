/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.example.domain;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    private String eventId;
    private String studentId;
    private String eventTitle;
    private String eventLocation;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime eventStartTime;


    public Booking(){
    }

    public Booking(int bookingId, String eventId, String studentId, String eventTitle, String eventLocation, LocalDateTime eventStartTime) {
        this.bookingId = bookingId;
        this.eventId = eventId;
        this.studentId = studentId;
        this.eventTitle = eventTitle;
        this.eventLocation = eventLocation;
        this.eventStartTime = eventStartTime;
    }

    public int getBookingId() {
        return bookingId;
    }

    public String getEventTitle(){
        return eventTitle;
    }

    public void setEventTitle(String eventTitle){
        this.eventTitle = eventTitle;
    }

    public void setEventLocation(String eventLocation){
        this.eventLocation = eventLocation;
    }

    public void setEventStartTime(LocalDateTime eventStartTime){
        this.eventStartTime = eventStartTime;
    }

    public String getEventLocation(){
        return eventLocation;
    }

    public LocalDateTime getEventStartTime(){
        return eventStartTime;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentID(String studentId) {
        this.studentId = studentId;
    }
}
