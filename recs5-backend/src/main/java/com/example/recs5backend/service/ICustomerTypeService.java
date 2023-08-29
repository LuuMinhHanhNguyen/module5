package com.example.recs5backend.service;

import com.example.recs5backend.model.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> getAll();
}
