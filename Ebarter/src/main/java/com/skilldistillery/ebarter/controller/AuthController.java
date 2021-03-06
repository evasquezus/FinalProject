package com.skilldistillery.ebarter.controller;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ebarter.data.AuthService;
import com.skilldistillery.ebarter.entities.User;

@RestController
@RequestMapping("auth")
@CrossOrigin({"*", "http://localhost:4200"})
public class AuthController {

	@Autowired
	AuthService authService;
	
	@RequestMapping(path = "/register", method = RequestMethod.POST)
	public User register(@RequestBody User user, HttpServletResponse res) {

	  if (user == null) {
	    res.setStatus(400);
	  }

	  System.out.println("AuthController.register(): " + user);
	  user = authService.register(user);

	  return user;
	}


	@RequestMapping(path = "/authenticate", method = RequestMethod.GET)
	public Principal authenticate(Principal principal) {
		System.out.println("in auth controller");
	  return principal;
	}

}