package com.example.recs5backend.service;

import com.example.recs5backend.model.Customer;
import com.example.recs5backend.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Page<Customer> getAll(String name, Pageable pageable) {
        return iCustomerRepository.findAllWithSearch(name,pageable);
    }

    @Override
    public Page<Customer> getAllWithoutSearch(Pageable pageable) {
        return iCustomerRepository.findAll(pageable);
    }
}
