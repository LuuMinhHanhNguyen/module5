package com.example.recs5backend.service;

import com.example.recs5backend.model.Customer;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;


public interface ICustomerService {
    Page<Customer> getAll(String name, Pageable pageable);

    Page<Customer> getAllWithoutSearch(Pageable pageable);
}
