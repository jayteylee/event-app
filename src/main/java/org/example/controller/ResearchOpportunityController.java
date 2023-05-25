package org.example.controller;

import org.example.domain.ResearchOpportunity;
import org.example.service.research.ResearchOpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ResearchOpportunityController {

    @Autowired
    private ResearchOpportunityService researchOpportunityService;

    // Constructor injection for ReaserchOppportunityService
    public ResearchOpportunityController(ResearchOpportunityService researchOpportunityService) {
        this.researchOpportunityService = researchOpportunityService;
    }

    // Get all research
    @GetMapping("/research")
    List<ResearchOpportunity> getAllResearchOpportunitys() {
        return researchOpportunityService.getAllResearchOpportunitys();
    }

    // Get research by ID
    @GetMapping("/research/{id}")
    ResearchOpportunity getResearchOpportunityById(@PathVariable Long id) {
        return researchOpportunityService.getResearchOpportunityById(id);
    }

    // Create a new research
    @PostMapping("/research")
    ResearchOpportunity createResearchOpportunity(@RequestBody ResearchOpportunity researchOpportunity) {
        return researchOpportunityService.createResearchOpportunity(researchOpportunity);
    }

    // Update an research
    @PutMapping("/research/{id}")
    ResearchOpportunity updateResearchOpportunity(@RequestBody ResearchOpportunity researchOpportunity,
            @PathVariable Long id) {
        return researchOpportunityService.updateResearchOpportunity(researchOpportunity, id);
    }

    // Delete an research
    @DeleteMapping("/research/{id}")
    List<ResearchOpportunity> deleteResearchOpportunity(@PathVariable Long id) {
        return researchOpportunityService.deleteResearchOpportunity(id);
    }
}
