/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.example.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Liason {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int liasonId;
    public String title;
    public LocalDateTime startTime;
    public String location;

    public Liason(int liasonId, String title, LocalDateTime startTime, String location) {
        this.liasonId = liasonId;
        this.title = title;
        this.startTime = startTime;
        this.location = location;
    }

    public int getLiasonId() {
        return liasonId;
    }

    public void setLiasonId(int liasonId) {
        this.liasonId = liasonId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
