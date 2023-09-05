package com.example.refinal5backend.repository;

import com.example.refinal5backend.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface iProductTypeRepository extends JpaRepository<ProductType, Long> {


    @Query(nativeQuery = true, value = "select * from product_type")
    List<ProductType> getAll();
}
