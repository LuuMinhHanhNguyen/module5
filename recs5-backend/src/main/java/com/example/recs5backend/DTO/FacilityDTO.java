package com.example.recs5backend.DTO;

import com.example.recs5backend.model.FacilityType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.ManyToOne;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class FacilityDTO implements Validator {


    @NotBlank(message = "Name is required!")
    private String name;

    @DecimalMin(value = "10.0")
    private double area;

    @DecimalMin(value = "50.0")
    private double cost;

    @Min(1)
    private int capacity;

    @NotBlank(message = "Image URL is required!")
    private String image;

    @NotNull(message = "Facility type is required!")
    @ManyToOne
    private FacilityType facilityType;

    public FacilityDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
