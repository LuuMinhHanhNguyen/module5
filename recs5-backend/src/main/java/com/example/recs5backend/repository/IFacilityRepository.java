package com.example.recs5backend.repository;

import com.example.recs5backend.model.Facility;
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
public interface IFacilityRepository extends JpaRepository<Facility, Long> {

    @Query(nativeQuery = true, value = "select * from facilities f where f.name like %:name%")
    Page<Facility> getAll(@Param("name") String name, Pageable pageable);


    @Modifying
    @Query(nativeQuery = true, value = "insert into facilities (area, capacity, cost, image, name, facility_type_id)" +
            " values (:#{#facility.area}, :#{#facility.capacity}, :#{#facility.cost}," +
            " :#{#facility.image}, :#{#facility.name}, :#{#facility.facilityType} )")
    void addNewFacility(@Param("facility") Facility facility);

    @Query(nativeQuery = true, value = "select * from facilities f where f.id = :id")
    Facility findBy(@Param("id") Long id);


    @Modifying
    @Query(nativeQuery = true, value = "update facilities f set f.area = :#{#facility.area}, f.capacity = :#{#facility.capacity}," +
            "f.cost = :#{#facility.cost}, f.image = :#{#facility.image} , f.name = :#{#facility.name}, " +
            "f.facility_type_id = :#{#facility.facilityType} where f.id = :id")
    void update(@Param("facility") Facility facility, @Param("id") Long id);

    @Modifying
    @Query(nativeQuery = true, value = "delete from facilities where id = :id")
    void delete(@Param("id") Long id);

}
