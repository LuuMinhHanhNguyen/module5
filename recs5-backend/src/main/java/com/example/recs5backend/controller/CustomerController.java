package com.example.recs5backend.controller;

import com.example.recs5backend.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;


@Controller
@RequestMapping("/customers")
@CrossOrigin
@Component
public class CustomerController {

    @Autowired
    private ICustomerService iCustomerService;
//    @GetMapping("/{page}/{limit}")
//    ResponseEntity<?> getAllCus(@PathVariable("page") int page, @PathVariable("limit") int limit){
//        Pageable pageable = PageRequest.of(page, limit);
//        return new ResponseEntity<>(iCustomerService.getAllWithoutSearch(pageable),HttpStatus.OK);
//    }
    @GetMapping("/search")
    ResponseEntity<?> getAll(@RequestParam(value = "name", defaultValue = "") String name, @RequestParam("page") int page, @RequestParam("limit") int limit){
        System.out.println("hihih: " +name);
        System.out.println(page);
        System.out.println(limit);
        Pageable pageable = PageRequest.of(page, limit);
         return new ResponseEntity<>(iCustomerService.getAll(name, pageable), HttpStatus.OK);
    }





}
