package com.example.refinal5backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProductType {
    @Id
    private Long id;

    private String name;

    public ProductType() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
