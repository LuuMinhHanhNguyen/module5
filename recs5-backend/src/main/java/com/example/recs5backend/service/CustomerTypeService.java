package com.example.recs5backend.service;

import com.example.recs5backend.model.CustomerType;
import com.example.recs5backend.repository.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService{

    @Autowired
    private ICustomerTypeRepository iCustomerTypeRepository;
    @Override
    public List<CustomerType> getAll() {
        return iCustomerTypeRepository.findAll();
    }
}
