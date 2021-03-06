package com.skilldistillery.ebarter.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Address;
import com.skilldistillery.ebarter.entities.User;
import com.skilldistillery.ebarter.repositories.AddressRepository;
import com.skilldistillery.ebarter.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repo;
	
	@Autowired
	AddressRepository addrRepo;

	@Override
	public List<User> getAllUsers() {
		List<User> allUsers = repo.findAll();
		return allUsers;
	}

	@Override
	public User getUserById(int id) {
		Optional<User> userFound = repo.findById(id);
		if (!userFound.isPresent()) {
			return null;
		}
		User user = userFound.get();
		return user;
	}

	@Override
	public User createUser(User user) {
		if (user.getEmail() != null & user.getFirstName() != null && user.getLastName() != null
				&& user.getUsername() != null) {
			user.setEnabled(true);
			if (user.getAddress() != null) {
			   Address address = user.getAddress();
			   addrRepo.saveAndFlush(address);
			}
			System.out.println("UserService.createUser():");
			System.out.println(user);
			repo.saveAndFlush(user);
			return user;
		}
		return null;
	}

	@Override
	public User updateUser(int id, User user) {
		Optional<User> opt = repo.findById(id);
		if (opt.isPresent()) {
			User managed = opt.get();
			managed.setEnabled(user.getEnabled());
			managed.setUsername(user.getUsername());
			managed.setEmail(user.getEmail());
			managed.setFirstName(user.getFirstName());
			managed.setLastName(user.getLastName());
			repo.saveAndFlush(managed);
			return managed;
		}
		return null;
	}

	// This need to be worked on the active column in database needs to be changed
	// to a boolean
	@Override
	public boolean deleteUser(User user, int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			user.setEnabled(false);
			deleted = true;
		}
		return deleted;
	}
	
	@Override
	public User findByUserName(String userName) {
		User user = null;
		user = repo.findByUsername(userName);
		return user;
	}

}
