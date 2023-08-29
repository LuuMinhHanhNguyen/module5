package com.example.recs5backend.service;

import com.example.recs5backend.model.Facility;
import com.example.recs5backend.repository.IFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FacilityService implements IFacilityService{

    @Autowired
    private IFacilityRepository iFacilityRepository;
    @Override
    public Page<Facility> getAll(String name, Pageable pageable) {
        return iFacilityRepository.getAll(name, pageable);
    }

    @Override
    public void add(Facility facility) {
        iFacilityRepository.addNewFacility(facility);
    }

    @Override
    public Facility find(Long id) {
        return iFacilityRepository.findBy(id);
    }

    @Override
    public void update(Facility facility, Long id) {
        iFacilityRepository.update(facility, id);
    }

    @Override
    public void delete(Long id) {
        iFacilityRepository.delete(id);
    }
}
