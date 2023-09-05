package com.example.refinal5backend.repository;

import com.example.refinal5backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface iProductRepository extends JpaRepository<Product, Long> {

    @Query(nativeQuery = true, value = "select * from product p where p.name like %:name% and p.type_id like %:typeId% ")
    Page<Product> getAll(Pageable pageable, @Param("name") String name, @Param("typeId") String typeId);


    @Query(nativeQuery = true, value = "select * from product p where p.id = :id")
    Product findBy(@Param("id") Long id);


    @Modifying
    @Query(nativeQuery = true, value = "update product p set p.code = :#{#product.code}, p.name = :#{#product.name}," +
            " p.date = :#{#product.date}, p.total = :#{#product.total}, p.type_id = :#{#product.type} where p.id = :id")
    void updateProduct(@Param("product") Product product, @Param("id") Long id);

    @Modifying
    @Query(nativeQuery = true, value = "insert into product (code, name, date, total, type_id) values (" +
            ":#{#product.code}, :#{#product.name}, :#{#product.date}, :#{#product.total}, :#{#product.type})")
    void create(@Param("product") Product product);

    @Modifying
    @Query(nativeQuery = true, value = "delete from product where id = :id")
    void delete(@Param("id") Long id);
}
