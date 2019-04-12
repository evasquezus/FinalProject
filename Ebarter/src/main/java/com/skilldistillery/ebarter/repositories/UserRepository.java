package com.skilldistillery.ebarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.ebarter.entities.User;

public interface UserRepository  extends JpaRepository<User, Integer>{
	
	public User findByUsername(String username);

}
