package com.skilldistillery.ebarter.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ebarter.data.CategoryService;
//import com.skilldistillery.ebarter.data.CategoryService;
import com.skilldistillery.ebarter.data.ItemService;
import com.skilldistillery.ebarter.data.UserService;
import com.skilldistillery.ebarter.entities.Category;
//import com.skilldistillery.ebarter.entities.Category;
import com.skilldistillery.ebarter.entities.Item;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4200" })
public class ItemController {

	@Autowired
	ItemService service;

	@Autowired
	CategoryService catService;

	@Autowired
	UserService userService;

	@GetMapping(path = "items")
	public List<Item> index() {
		List<Item> allItems = service.getAllItems();
		return allItems;
	}

	@GetMapping(path = "items/{id}")
	public Item getIndividualItem(@PathVariable("id") int id) {
		Item itemRetrived = service.getItemById(id);
		return itemRetrived;
	}

	// This needs work we need to fix the database side
	@DeleteMapping(path = "items/{id}")
	public void deleteItem(@PathVariable("id") int id) {
		try {
			Item item = service.getItemById(id);
			item.setItemStatus(3);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@PutMapping(path = "items/{id}")
	public Item updateItem(@PathVariable("id") int id, @RequestBody Item itemToBeUpdated,
			HttpServletResponse response) {
		try {
			itemToBeUpdated.setItemStatus(2);
//			Category category = catService.getCategoryById(id);
//			itemToBeUpdated.setCategory(category);
			itemToBeUpdated = service.updateItem(id, itemToBeUpdated);
			response.setStatus(200);
			return itemToBeUpdated;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;

	}
	
	@PutMapping(path = "items/{id}")
	public Item updateItemStatus(@PathVariable("id") int id, @RequestBody Item itemToBeUpdated,
			HttpServletResponse response) {
		itemToBeUpdated.setItemStatus(2);
		System.out.println("*************************************************");
		try {

			itemToBeUpdated = service.updateItem(id, itemToBeUpdated);
			response.setStatus(200);
			return itemToBeUpdated;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;

	}

	@PostMapping(path = "items")
	public Item addItem(@RequestBody Item itemToBeAdded, HttpServletResponse response) {

		try {
//			Category category = catService.getCategoryById(1);
//			itemToBeAdded.setCategory(category);
			Item newItem = service.createItem(itemToBeAdded);
			response.setStatus(201);
			return newItem;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;
	}

}
