package com.example.recs5backend.service;

import com.example.recs5backend.model.Customer;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


public interface ICustomerService {
    Page<Customer> getAll(String name, Pageable pageable);

    void add(Customer newCustomer);

    Customer findById(Long id);

    void update(Customer customer, Long id);

    void delete(Long id);
}
