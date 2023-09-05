package com.example.refinal5backend.service;

import com.example.refinal5backend.model.ProductType;

import com.example.refinal5backend.repository.iProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements iProductTypeService {

    @Autowired
    private iProductTypeRepository iProductTypeRepository;
    @Override
    public List<ProductType> getAll() {
        return iProductTypeRepository.getAll() ;
    }
}
