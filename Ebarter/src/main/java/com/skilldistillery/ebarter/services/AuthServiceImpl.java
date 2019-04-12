//package com.skilldistillery.ebarter.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import com.skilldistillery.ebarter.entities.User;
//import com.skilldistillery.ebarter.repositories.UserRepository;
//
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthServiceImpl implements AuthService {
//
//	@Autowired
//	PasswordEncoder encoder;
//
//	@Autowired
//	UserRepository userRepo;
//
//	public User register(User user) {
//
////		encrypt and set the password for the User.
//		if (user != null) {
//			String clearPW = user.getPassword();
//			String encodedPW = encoder.encode(clearPW);
//			user.setPassword(encodedPW); // only persist encoded password
//
////			set the enabled field of the object to true.
//			user.setAuthenticated(true);
//
////			saveAndFlush the user using the UserRepo.
//			userRepo.saveAndFlush(user);
//		}
//
////		return the User object.
//		return user;
//	}
//
//	public User login(String username, String password) {
//		User dbUser = null;
//		User authenticated = null;
//		String dbPassword = null;
//		String encoded = encoder.encode(password);
//		if (username != null) {
//			dbUser = userRepo.findByUsername(username);
//			if (dbUser != null) {
//				dbPassword = dbUser.getPassword();
//				if(encoded.equals(dbPassword)) {
//					authenticated = dbUser;
//					authenticated.setAuthenticated(true);
//				}
//			}
//		}
//
//		return authenticated;
//	}
//
//}
