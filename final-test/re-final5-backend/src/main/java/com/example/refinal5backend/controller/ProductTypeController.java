package com.example.refinal5backend.controller;

import com.example.refinal5backend.service.iProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/productTypes")
@CrossOrigin
public class ProductTypeController {
    @Autowired
    private iProductTypeService iProductTypeService;

    @GetMapping()
    public ResponseEntity<?> getAllTypes(){
        return new ResponseEntity<>(iProductTypeService.getAll(), HttpStatus.OK);
    }
}
