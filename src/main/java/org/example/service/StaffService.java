package org.example.service;

import org.example.domain.Staff;

public interface StaffService {

    Boolean authenticate(String username, String password);
}
