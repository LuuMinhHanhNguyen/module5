package com.example.refinal5backend.dto;
import com.example.refinal5backend.model.ProductType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;
import java.time.LocalDate;

public class ProductDTO implements Validator {




    @NotBlank(message = "Fill in product code!")
    @Size(max = 100)
//    @Pattern(regexp = "^[PD][0-9]{3}$")
    private String code;


    @NotBlank(message = "Fill in name!")
    private String name;

    @NotBlank(message = "Fill in date!")
    private String date;


    @Min(1)
    private Integer total;


    @NotNull(message = "Choose type!")
    @ManyToOne
    private ProductType type;


    public ProductDTO() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
