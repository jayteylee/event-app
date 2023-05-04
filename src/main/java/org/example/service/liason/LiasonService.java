package org.example.service.liason;

import org.example.domain.Liason;

import java.util.List;

public interface LiasonService {

    Liason createLiason(Liason event);

    List<Liason> getAllLiasons();

    Liason getLiasonById(Long id);

    Liason updateLiason(Liason newLiason, Long id);

    List<Liason> deleteLiason(Long id);
}
