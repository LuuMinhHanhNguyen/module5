package com.example.recs5backend.model;

import javax.persistence.*;

@Entity
@Table(name = "facilities")
public class Facility {
//    {
//        "name": "Villa By the Hank",
//            "area": 110,
//            "cost": 2222,
//            "capacity": 10,
//            "image": "images/img_2.jpg",
//            "type": {
//        "id": 2,
//                "name": "Villa"
//    },
//        "id": 1
//    },
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double area;

    private double cost;

    private int capacity;

    private String image;

    @ManyToOne
    private FacilityType facilityType;


    public Facility() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public FacilityType getFacilityType() {
        return facilityType;
    }

    public void setFacilityType(FacilityType facilityType) {
        this.facilityType = facilityType;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }
}
