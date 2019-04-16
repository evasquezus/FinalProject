package com.skilldistillery.ebarter.data;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skilldistillery.ebarter.entities.Address;
import com.skilldistillery.ebarter.entities.Role;
import com.skilldistillery.ebarter.entities.User;
import com.skilldistillery.ebarter.repositories.AddressRepository;
import com.skilldistillery.ebarter.repositories.UserRepository;

@Transactional
@Repository
@Service
public class AuthServiceImpl implements AuthService {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	RoleService roleService;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private AddressRepository addrRepo;

	@Override
	public User register(User user) {
		if (user == null) {
			return null;
		}
		String encodedPW = encoder.encode(user.getPassword());
		user.setPassword(encodedPW); // only persist encoded password
		user.setAuthenticated(true);
		Role role = roleService.getRoleById(2);
		user.setRole(role);
		user.setEnabled(true);
		if (user.getAddress() != null) {
			Address address = user.getAddress();
			addrRepo.saveAndFlush(address);
		}
		System.out.println("AuthService.createUser():");
		System.out.println(user);

		userRepo.saveAndFlush(user);
		return user;
	}
}
