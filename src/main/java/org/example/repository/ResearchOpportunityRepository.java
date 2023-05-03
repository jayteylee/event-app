package org.example.repository;

import org.example.domain.ResearchOpportunity;
import org.example.domain.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResearchOpportunityRepository extends JpaRepository<ResearchOpportunity, Long> {

}