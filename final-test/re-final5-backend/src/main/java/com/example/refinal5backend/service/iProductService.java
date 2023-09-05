package com.example.refinal5backend.service;

import com.example.refinal5backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface iProductService {
    Page<Product> getAll(Pageable pageable, String name, String typeId);

    Product findProduct(Long id);
    void update(Product product, Long id);

    void create(Product product);

    void delete(Long id);
}
