package org.example.service.liason;

import org.example.domain.Liason;
import org.example.exception.ObjectNotFoundException;
import org.example.repository.LiasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LiasonServiceImpl implements LiasonService {

    @Autowired
    private LiasonRepository liasonRepository;

    // Create a new laison
    @Override
    public Liason createLiason(Liason newLiason) {
        return liasonRepository.save(newLiason);
    }

    // Get all liasons
    @Override
    public List<Liason> getAllLiasons() {
        return liasonRepository.findAll();
    }

    // Gte liason by ID
    @Override
    public Liason getLiasonById(Long id) {
        return liasonRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Update Liason
    @Override
    public Liason updateLiason(Liason newLiason, Long id) {
        // FInd a Liason by its ID in the repository
        return liasonRepository.findById(id)
                .map(liason -> {
                    // Update the liason details
                    liason.setTitle(newLiason.getTitle());
                    liason.setLocation(newLiason.getLocation());
                    liason.setStartTime(newLiason.getStartTime());
                    // Save the updated liason in the repository
                    return liasonRepository.save(liason);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }

    // Delete the liason
    @Override
    public List<Liason> deleteLiason(Long id) {
        // Checks if the Liason exists
        if (!liasonRepository.existsById(id)) {
            throw new ObjectNotFoundException(id);
        }
        // Delete the liason by ID
        liasonRepository.deleteById(id);
        // Return all remaining Liasons
        return liasonRepository.findAll();
    }
}
