package com.example.refinal5backend.controller;

import com.example.refinal5backend.dto.ProductDTO;
import com.example.refinal5backend.model.Product;
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
import com.example.refinal5backend.service.iProductService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private iProductService iProductService;
    @GetMapping()
    public ResponseEntity<?> getProducts(@RequestParam("name") String name, @RequestParam("typeId") String typeId, @RequestParam("page") int page,@RequestParam("limit") int limit){
        Pageable pageable = PageRequest.of(page, limit);
        System.out.println(typeId);
        return new ResponseEntity<>(iProductService.getAll(pageable, name, typeId), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProduct(@PathVariable("id") Long id){

        return new ResponseEntity<>(iProductService.findProduct(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody ProductDTO productDTO, BindingResult bindingResult, @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            Map<String, String> errors = new HashMap<>();
            for (FieldError err: bindingResult.getFieldErrors()) {
                    errors.put(err.getField(), err.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.NOT_ACCEPTABLE);
        }
        Product updatedProduct = new Product();
        BeanUtils.copyProperties(productDTO, updatedProduct);
        iProductService.update(updatedProduct, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductDTO productDTO, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            Map<String, String> errors = new HashMap<>();
            for (FieldError err: bindingResult.getFieldErrors()) {
                errors.put(err.getField(), err.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.NOT_ACCEPTABLE);
        }
        Product newProduct = new Product();
        BeanUtils.copyProperties(productDTO, newProduct);
        iProductService.create(newProduct);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Long id){
        iProductService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }





}
