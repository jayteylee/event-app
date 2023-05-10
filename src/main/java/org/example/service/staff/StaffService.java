package org.example.service.staff;

import org.example.domain.Staff;


public interface StaffService {

    Boolean authenticate(String email, String password);
}
