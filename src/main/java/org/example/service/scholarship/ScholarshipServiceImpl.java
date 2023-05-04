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

    @Override
    public Scholarship createScholarship(Scholarship newScholarship) {
        return scholarshipRepository.save(newScholarship);
    }

    @Override
    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    @Override
    public Scholarship getScholarshipById(Long id) {
        return scholarshipRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    @Override
    public Scholarship updateScholarship(Scholarship newScholarship, Long id) {
        return scholarshipRepository.findById(id)
                .map(scholarship -> {
                    scholarship.setName(newScholarship.getName());
                    scholarship.setType(newScholarship.getType());
                    scholarship.setSubject(newScholarship.getSubject());
                    scholarship.setNumAvailable(newScholarship.getNumAvailable());
                    return scholarshipRepository.save(scholarship);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }


    @Override
    public List<Scholarship> deleteScholarship(Long id){
        if(!scholarshipRepository.existsById(id)){
            throw new ObjectNotFoundException(id);
        }
        scholarshipRepository.deleteById(id);
        return scholarshipRepository.findAll();
    }
}
