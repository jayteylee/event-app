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

    @Override
    public Liason createLiason(Liason newLiason) {
        return liasonRepository.save(newLiason);
    }

    @Override
    public List<Liason> getAllLiasons() {
        return liasonRepository.findAll();
    }

    @Override
    public Liason getLiasonById(Long id) {
        return liasonRepository.findById(id)
                .orElseThrow(() -> new ObjectNotFoundException(id));
    }

    @Override
    public Liason updateLiason(Liason newLiason, Long id) {
        return liasonRepository.findById(id)
                .map(liason -> {
                    liason.setTitle(newLiason.getTitle());
                    liason.setLocation(newLiason.getLocation());
                    liason.setStartTime(newLiason.getStartTime());
                    return liasonRepository.save(liason);
                }).orElseThrow(() -> new ObjectNotFoundException(id));
    }


    @Override
    public List<Liason> deleteLiason(Long id){
        if(!liasonRepository.existsById(id)){
            throw new ObjectNotFoundException(id);
        }
        liasonRepository.deleteById(id);
        return liasonRepository.findAll();
    }
}
