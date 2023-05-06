package org.example.service.staff;

import org.example.domain.Staff;
import org.example.repository.StaffRepository;
import org.example.service.staff.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StaffServiceImp implements StaffService {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Boolean authenticate(String username, String password) {
        Optional<Staff> staffOptional = staffRepository.findByUsernameAndPassword(username, password);

        return staffOptional.isPresent();
    }
}
