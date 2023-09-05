package com.example.refinal5backend.service;

import com.example.refinal5backend.model.Product;
import com.example.refinal5backend.repository.iProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements iProductService{

    @Autowired
    private iProductRepository iProductRepository;
    @Override
    public Page<Product> getAll(Pageable pageable, String name, String typeId) {
        return iProductRepository.getAll(pageable, name, typeId);
    }

    @Override
    public Product findProduct(Long id) {
        return iProductRepository.findBy(id);
    }

    @Override
    public void update(Product product, Long id) {
        iProductRepository.updateProduct(product, id);
    }

    @Override
    public void create(Product product) {
        iProductRepository.create(product);
    }

    @Override
    public void delete(Long id) {
        iProductRepository.delete(id);
    }
}
