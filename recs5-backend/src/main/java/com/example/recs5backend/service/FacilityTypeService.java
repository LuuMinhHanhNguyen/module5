package com.example.recs5backend.service;

import com.example.recs5backend.model.FacilityType;
import com.example.recs5backend.repository.ICustomerRepository;
import com.example.recs5backend.repository.IFacilityTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityTypeService implements IFacilityTypeService{
    @Autowired
    private IFacilityTypeRepository iFacilityTypeRepository;
    @Override
    public List<FacilityType> getAll() {

        return iFacilityTypeRepository.findAll();
    }
}
