package com.example.recs5backend.repository;

import com.example.recs5backend.DTO.CustomerDTO;
import com.example.recs5backend.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    @Query(nativeQuery = true, value = "select * from customers c where c.name like %:name%")
    Page<Customer> findAllWithSearch(@Param("name") String name, Pageable pageable);

    @Query(nativeQuery = true, value = "insert into customers " +
            "(name, dob, address, phone, gender, email, id_card, customer_type_id)" +
            " values (:#{#newCustomer.name}, :#{#newCustomer.dob}, :#{#newCustomer.address}," +
            ":#{#newCustomer.phone}, :#{#newCustomer.gender}, :#{#newCustomer.email}, " +
            ":#{#newCustomer.idCard}, :#{#newCustomer.customerType})"
    )
    @Modifying
    void addCustomer(@Param("newCustomer") Customer newCustomer);


    @Query(nativeQuery = true, value = "select * from customers c where c.id = :id")
    Customer getCustomerById(@Param("id") Long id);

    @Query(nativeQuery = true, value = "update customers c set c.name = :#{#customer.name}, c.dob = :#{#customer.dob}," +
            "c.address = :#{#customer.address}, c.phone = :#{#customer.phone}, c.gender = :#{#customer.gender}," +
            "c.email = :#{#customer.email}, c.id_card = :#{#customer.idCard}, c.customer_type_id = :#{#customer.customerType}" +
            " where c.id = :id")
    @Modifying
    void updateCustomer(@Param("customer") Customer customer, @Param("id") Long id);


    @Query(nativeQuery = true, value = "delete from customers where id = :id")
    @Modifying
    void deleteCustomer(@Param("id") Long id);
}
