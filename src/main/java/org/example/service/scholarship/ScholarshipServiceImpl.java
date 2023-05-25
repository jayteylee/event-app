package org.example.service.scholarship;

import org.example.domain.Scholarship;
import org.example.exception.ObjectNotFoundException;
import org.example.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScholarshipServiceImpl implements ScholarshipService {

    @Autowired
    private ScholarshipRepository scholarshipRepository;

    // Creates a new scholarship
    @Override
    public Scholarship createScholarship(Scholarship newScholarship) {
        return scholarshipRepository.save(newScholarship);
    }

    // Gets all scholarships
    @Override
    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    // Gets scholarship by ID
    @Override
    public Scholarship getScholarshipById(Long id) {
        return scholarshipRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Updates scholarship
    @Override
    public Scholarship updateScholarship(Scholarship newScholarship, Long id) {
        // FInd scholarship by ID
        return scholarshipRepository.findById(id)
                .map(scholarship -> {
                    // Updates scholarship details
                    scholarship.setName(newScholarship.getName());
                    scholarship.setType(newScholarship.getType());
                    scholarship.setSubject(newScholarship.getSubject());
                    scholarship.setNumAvailable(newScholarship.getNumAvailable());
                    // Saves scholarship details to repository
                    return scholarshipRepository.save(scholarship);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Deletes scholarships
    @Override
    public List<Scholarship> deleteScholarship(Long id) {
        // check if the scholarship exists
        if (!scholarshipRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        // Deletes the scholarship from the repository
        scholarshipRepository.deleteById(id);
        // Returns all remaining scholarships
        return scholarshipRepository.findAll();
    }
}
