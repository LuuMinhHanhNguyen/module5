package com.example.recs5backend.DTO;

import com.example.recs5backend.model.CustomerType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class CustomerDTO implements Validator {

    @NotBlank(message = "Name is required!")
    private String name;

    @NotBlank(message = "DOB is required!")
    private String dob;

    @NotBlank(message = "Address is required!")
    private  String address;

    @NotNull(message = "Email is required!")
    @Pattern(regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", message = "Incorrect format!")
    private String email;

    @NotNull(message = "Phone is required!")
    @Pattern(regexp = "^0[0-9]{9}$", message = "Incorrect format!")
    private String phone;

    @NotBlank(message = "Gender is required!")
    private String gender;


    @NotNull(message = "ID CARD is required!")
    private Long idCard;

    @NotNull(message = "Customer type is required!")
    @ManyToOne
    private CustomerType customerType;

    public CustomerDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Long getIdCard() {
        return idCard;
    }

    public void setIdCard(Long idCard) {
        this.idCard = idCard;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
