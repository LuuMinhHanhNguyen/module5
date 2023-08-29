package com.example.recs5backend.controller;
import com.example.recs5backend.DTO.CustomerDTO;
import com.example.recs5backend.model.Customer;
import com.example.recs5backend.service.ICustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/customers")
@CrossOrigin
public class CustomerController {

    @Autowired
    private ICustomerService iCustomerService;
    @GetMapping("/search")
    ResponseEntity<?> getAll(@RequestParam(value = "name", defaultValue = "") String name, @RequestParam("page") int page, @RequestParam("limit") int limit){
        System.out.println("hihih: " +name);
        System.out.println(page);
        System.out.println(limit);
        Pageable pageable = PageRequest.of(page, limit);
         return new ResponseEntity<>(iCustomerService.getAll(name, pageable), HttpStatus.OK);
    }

    @PostMapping()
    ResponseEntity<?> create(@Valid @RequestBody CustomerDTO customerDTO, BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
                System.out.println(error.getField());
                System.out.println(error.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        System.out.println(customerDTO);
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDTO, customer);
        iCustomerService.add(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<?> findById(@PathVariable("id") Long id){
        return new ResponseEntity<>(iCustomerService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    ResponseEntity<?> updateCustomer(@Valid @RequestBody CustomerDTO customerDTO,
                                     BindingResult bindingResult,
                                     @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            Map<String, String> errors = new HashMap<>();
            for (FieldError error: bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.EXPECTATION_FAILED);
        }
        Customer editedCus = new Customer();
        BeanUtils.copyProperties(customerDTO, editedCus);
        iCustomerService.update(editedCus, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteCustomer(@PathVariable("id") Long id){
        iCustomerService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
