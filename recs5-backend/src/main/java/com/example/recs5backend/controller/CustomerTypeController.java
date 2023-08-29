package com.example.recs5backend.controller;


import com.example.recs5backend.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customerType")
@CrossOrigin
public class CustomerTypeController {
    @Autowired
    private ICustomerTypeService iCustomerTypeService;
    @GetMapping()
    ResponseEntity<?> getAll(){
        return new ResponseEntity<>(iCustomerTypeService.getAll(), HttpStatus.OK);
    }

}
