package org.example.service.research;

import org.example.domain.ResearchOpportunity;

import java.util.List;

public interface ResearchOpportunityService {

    ResearchOpportunity createResearchOpportunity(ResearchOpportunity researchOpp);

    List<ResearchOpportunity> getAllResearchOpportunitys();

    ResearchOpportunity getResearchOpportunityById(Long id);

    ResearchOpportunity updateResearchOpportunity(ResearchOpportunity newResearchOpportunity, Long id);

    List<ResearchOpportunity> deleteResearchOpportunity(Long id);
}
