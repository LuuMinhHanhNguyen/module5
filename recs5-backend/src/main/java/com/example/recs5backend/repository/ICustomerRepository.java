package com.example.recs5backend.repository;

import com.example.recs5backend.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    @Query(nativeQuery = true, value = "select * from customers c where c.name like %:name%")
    Page<Customer> findAllWithSearch(@Param("name") String name, Pageable pageable);


    Page<Customer> findAll(Pageable pageable);
}
