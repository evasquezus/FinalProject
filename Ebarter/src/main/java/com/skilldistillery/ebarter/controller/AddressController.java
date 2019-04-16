package com.skilldistillery.ebarter.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ebarter.data.AddressService;
import com.skilldistillery.ebarter.data.UserService;
import com.skilldistillery.ebarter.entities.Address;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4200" })
public class AddressController {
	
	@Autowired
	UserService service;
	
	@Autowired 
	AddressService addServ;

//	@PostMapping(path = "addresses")
//	public Address addAddress(@RequestBody Address addUpdate, @PathVariable Integer id, HttpServletResponse resp) {
//		addUp
//		
//		return addToBeAdded;
//	}
}
