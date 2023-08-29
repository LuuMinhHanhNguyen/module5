package com.example.recs5backend.controller;

import com.example.recs5backend.service.ICustomerTypeService;
import com.example.recs5backend.service.IFacilityTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/facilityTypes")
@CrossOrigin
public class FacilityTypeController {
    @Autowired
    private IFacilityTypeService iFacilityTypeService;
    @GetMapping()
    ResponseEntity<?> getAll(){

        return new ResponseEntity<>(iFacilityTypeService.getAll(), HttpStatus.OK);
    }
}
