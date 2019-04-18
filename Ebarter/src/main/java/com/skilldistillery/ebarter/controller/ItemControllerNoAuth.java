package com.skilldistillery.ebarter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ebarter.data.ItemService;
import com.skilldistillery.ebarter.data.UserService;
import com.skilldistillery.ebarter.entities.Item;

@RestController
@RequestMapping("landing")
@CrossOrigin({ "*", "http://localhost:4200" })
public class ItemControllerNoAuth {

	@Autowired
	ItemService service;

//	@Autowired
//	CategoryService catService;

	@Autowired
	UserService userService;
	
	@GetMapping(path = "items")
	public List<Item> index() {
		List<Item> allItems = service.getAllItems();
		return allItems;
	}
}
