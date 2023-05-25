package org.example.service.research;

import org.example.domain.ResearchOpportunity;
import org.example.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.repository.ResearchOpportunityRepository;

import java.util.List;

@Service
public class ResearchOpportunityServiceImpl implements ResearchOpportunityService {

    @Autowired
    private ResearchOpportunityRepository researchOpportunityRepository;

    // Creates new research opportunity
    @Override
    public ResearchOpportunity createResearchOpportunity(ResearchOpportunity newResearchOpportunity) {
        return researchOpportunityRepository.save(newResearchOpportunity);
    }

    // Gets all reserch opportunities
    @Override
    public List<ResearchOpportunity> getAllResearchOpportunitys() {
        return researchOpportunityRepository.findAll();
    }

    // Gets research opportunity by ID
    @Override
    public ResearchOpportunity getResearchOpportunityById(Long id) {
        return researchOpportunityRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Update a research opportunity
    @Override
    public ResearchOpportunity updateResearchOpportunity(ResearchOpportunity newResearchOpportunity, Long id) {
        // Find the research op by its ID in the repository
        return researchOpportunityRepository.findById(id)
                .map(researchOpportunity -> {
                    // Update the research op details
                    researchOpportunity.setTitle(newResearchOpportunity.getTitle());
                    researchOpportunity.setType(newResearchOpportunity.getType());
                    researchOpportunity.setSubject(newResearchOpportunity.getSubject());
                    // Save the updated reserarch op
                    return researchOpportunityRepository.save(researchOpportunity);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Delete an research opportunity
    @Override
    public List<ResearchOpportunity> deleteResearchOpportunity(Long id) {
        // Check if the research op exists
        if (!researchOpportunityRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        // Deletes the research op by ID
        researchOpportunityRepository.deleteById(id);
        // Return all remaining research ops
        return researchOpportunityRepository.findAll();
    }
}
