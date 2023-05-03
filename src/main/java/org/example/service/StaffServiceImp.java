package org.example.service;

import org.example.domain.Staff;
import org.example.repository.EventRepository;
import org.example.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class StaffServiceImp implements StaffService{


    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Boolean authenticate(String username, String password) {
        Optional<Staff> staffOptional = staffRepository.findByUsernameAndPassword(username, password);

        return staffOptional.isPresent();
    }
}
