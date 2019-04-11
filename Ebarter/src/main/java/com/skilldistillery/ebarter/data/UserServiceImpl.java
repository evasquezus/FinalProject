package com.skilldistillery.ebarter.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.ebarter.entities.User;
import com.skilldistillery.ebarter.repositories.UserRepository;

public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repo;
	
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
	
//	@Override
//	public User createUser(User user) {
//		if (user.() != null && user.getCategory() != null & user.getAuthorName() != null) {
//			repo.saveAndFlush(user);
//			return user;
//		}
//		return null;
//	}

//	@Override
//	public User updateUser(int id, User book) {
//		Optional<User> opt = repo.findById(id);
//		if (opt.isPresent()) {
////			User managed = opt.get();
////			managed.setTitle(book.getTitle());
////			managed.setAuthorName(book.getAuthorName());
////			managed.setCategory(book.getCategory());
////			managed.setDateOfPurchase(book.getDateOfPurchase());
//			repo.saveAndFlush(book);
//		}
//		return null;
//	}

//	@Override
//	public boolean deleteUser(int id) {
//		boolean deleted = false;
//		if (repo.existsById(id)) {
//			repo.deleteById(id);
//			deleted = true;
//		}
//		return deleted;
//	}
}
