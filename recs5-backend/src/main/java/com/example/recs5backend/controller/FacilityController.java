package com.example.recs5backend.controller;

import com.example.recs5backend.DTO.FacilityDTO;
import com.example.recs5backend.model.Facility;
import com.example.recs5backend.service.IFacilityService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/facilities")
@CrossOrigin
public class FacilityController {

    @Autowired
    private IFacilityService iFacilityService;

    @GetMapping("/all")
    ResponseEntity<?> getAllFacilities(@RequestParam(value = "name", defaultValue = "", required = false) String name,
                                       @RequestParam("page") int page, @RequestParam("limit") int limit){

        Pageable pageable = PageRequest.of(page, limit);

        return new ResponseEntity<>(iFacilityService.getAll(name, pageable),HttpStatus.OK);
    }

    @PostMapping()
    ResponseEntity<?> createFacility(@Valid @RequestBody FacilityDTO facilityDTO, BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            System.out.println(facilityDTO);
            Map<String, String> errors = new HashMap<>();
            for (FieldError err: bindingResult.getFieldErrors()) {
                errors.put(err.getField(), err.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.EXPECTATION_FAILED);
        }
        Facility newFacility = new Facility();
        BeanUtils.copyProperties(facilityDTO, newFacility);
        iFacilityService.add(newFacility);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getFacility(@PathVariable("id") Long id){
        return new ResponseEntity<>(iFacilityService.find(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    ResponseEntity<?> updateFacility(@Valid @RequestBody FacilityDTO facilityDTO, BindingResult bindingResult, @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            Map<String, String> errors = new HashMap<>();
            for (FieldError err: bindingResult.getFieldErrors()) {
                errors.put(err.getField(), err.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.EXPECTATION_FAILED);
        }
        Facility editedFacility = new Facility();
        BeanUtils.copyProperties(facilityDTO, editedFacility);
        iFacilityService.update(editedFacility, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteFacility(@PathVariable("id") Long id){
        iFacilityService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
