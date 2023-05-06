package org.example.service.scholarship;

import org.example.domain.Scholarship;

import java.util.List;

public interface ScholarshipService {

    Scholarship createScholarship(Scholarship scholarship);

    List<Scholarship> getAllScholarships();

    Scholarship getScholarshipById(Long id);

    Scholarship updateScholarship(Scholarship newScholarship, Long id);

    List<Scholarship> deleteScholarship(Long id);
}
