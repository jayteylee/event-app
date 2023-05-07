package org.example.repository;

import org.example.domain.Liason;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiasonRepository extends JpaRepository<Liason, Long> {

}
