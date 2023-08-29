package com.example.recs5backend.service;

import com.example.recs5backend.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IFacilityService {
    Page<Facility> getAll(String name, Pageable pageable);

    void add(Facility facility);

    Facility find(Long id);

    void update(Facility facility, Long id);

    void delete(Long id);
}
