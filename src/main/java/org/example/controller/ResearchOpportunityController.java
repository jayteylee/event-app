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

    public ResearchOpportunityController(ResearchOpportunityService researchOpportunityService) {
        this.researchOpportunityService = researchOpportunityService;
    }

    @GetMapping("/research")
    List<ResearchOpportunity> getAllResearchOpportunitys(){
        return researchOpportunityService.getAllResearchOpportunitys();
    }

    @GetMapping("/research/{id}")
    ResearchOpportunity getResearchOpportunityById(@PathVariable Long id) {
        return researchOpportunityService.getResearchOpportunityById(id);
    }

    @PostMapping("/research")
    ResearchOpportunity createResearchOpportunity(@RequestBody ResearchOpportunity researchOpportunity){
        return researchOpportunityService.createResearchOpportunity(researchOpportunity);
    }

    @PutMapping("/research/{id}")
    ResearchOpportunity updateResearchOpportunity(@RequestBody ResearchOpportunity researchOpportunity, @PathVariable Long id){
        return researchOpportunityService.updateResearchOpportunity(researchOpportunity, id);
    }

    @DeleteMapping("/research/{id}")
    List<ResearchOpportunity> deleteResearchOpportunity(@PathVariable Long id) {
        return researchOpportunityService.deleteResearchOpportunity(id);
    }
}
