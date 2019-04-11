package com.skilldistillery.ebarter.data;

import java.util.List;

import com.skilldistillery.ebarter.entities.User;

public interface UserService {

	List<User> getAllUsers();

	User getUserById(int id);

	User updateUser(int id, User book);

	User createUser(User user);

	boolean deleteUser(User user, int id);

}
