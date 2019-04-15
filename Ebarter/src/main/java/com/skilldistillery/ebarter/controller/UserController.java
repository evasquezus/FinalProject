package com.skilldistillery.ebarter.controller;

import java.security.Principal;
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

import com.skilldistillery.ebarter.data.AddressService;
import com.skilldistillery.ebarter.data.RoleService;
import com.skilldistillery.ebarter.data.UserService;
import com.skilldistillery.ebarter.entities.Address;
import com.skilldistillery.ebarter.entities.Role;
import com.skilldistillery.ebarter.entities.User;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4200" })
public class UserController {

	@Autowired
	UserService service;

	@Autowired
	RoleService roleService;
	
	@Autowired
	AddressService addressService;

	@GetMapping(path = "users")
	public List<User> index() {
		List<User> allUsers = service.getAllUsers();
		return allUsers;
	}

	@GetMapping(path = "users/{id}")
	public User getIndividualBook(@PathVariable("id") int id,Principal principal) {
		User userRetrived = service.getUserById(id);
		return userRetrived;
	}

	@DeleteMapping(path = "users/{id}")
	public void deleteUser(@PathVariable("id") int id,Principal principal) {
		try {
			User user = service.getUserById(id);
			user.setEnabled(false);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@PutMapping(path = "users/{id}")
	public User updateUser(@PathVariable("id") int id, @RequestBody User userToBeUpdated,
			HttpServletResponse response,Principal principal) {
			Address address = userToBeUpdated.getAddress();
		try {
//			Role role = roleService.getRoleById(1);
//			userToBeUpdated.setRole(role);
			userToBeUpdated = service.updateUser(id, userToBeUpdated);
			address = addressService.updateAddress(address);
			userToBeUpdated.setAddress(address);
			response.setStatus(200);			
			return userToBeUpdated;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;

	}

	@PostMapping(path = "users")
	public User addUser(@RequestBody User userToBeAdded, HttpServletResponse response,Principal principal) {
		Role role = roleService.getRoleById(1);
		userToBeAdded.setRole(role);
		User newUser = service.createUser(userToBeAdded);
		response.setStatus(201);
		return newUser;
	}
	
	@GetMapping(path = "users/username/{userName}")
	public User getByUserName(@PathVariable("userName") String userName, Principal principal) {
		User userRetrived = service.findByUserName(userName);
		return userRetrived;
	}

}
