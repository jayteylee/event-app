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

    @Override
    public ResearchOpportunity createResearchOpportunity(ResearchOpportunity newResearchOpportunity) {
        return researchOpportunityRepository.save(newResearchOpportunity);
    }

    @Override
    public List<ResearchOpportunity> getAllResearchOpportunitys() {
        return researchOpportunityRepository.findAll();
    }

    @Override
    public ResearchOpportunity getResearchOpportunityById(Long id) {
        return researchOpportunityRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    @Override
    public ResearchOpportunity updateResearchOpportunity(ResearchOpportunity newResearchOpportunity, Long id) {
        return researchOpportunityRepository.findById(id)
                .map(researchOpportunity -> {
                    researchOpportunity.setTitle(newResearchOpportunity.getTitle());
                    researchOpportunity.setType(newResearchOpportunity.getType());
                    researchOpportunity.setSubject(newResearchOpportunity.getSubject());
                    return researchOpportunityRepository.save(researchOpportunity);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }


    @Override
    public List<ResearchOpportunity> deleteResearchOpportunity(Long id){
        if(!researchOpportunityRepository.existsById(id)){
            throw new ObjectNotFoundException(id);
        }
        researchOpportunityRepository.deleteById(id);
        return researchOpportunityRepository.findAll();
    }
}
