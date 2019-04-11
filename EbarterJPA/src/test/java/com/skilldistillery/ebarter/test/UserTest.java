package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.User;

public class UserTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	User user;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		user = em.find(User.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_user_get_data_from_user_table() {
		user = em.find(User.class, 1);
		assertNotNull(user);
		assertEquals(1, user.getId());
		assertEquals("Young", user.getFirstName());
	}

	@Test
	public void test_user_map_address_onetomany_assosiation() {
		assertNotNull(user);
		assertEquals("Young", user.getFirstName());
		assertEquals("123 ebarter st", user.getAddress().getStreet());
		assertEquals("Denver", user.getAddress().getCity());
	}

	@Test
	public void test_user_map_role_onetone_assosiation() {
		assertNotNull(user);
		assertEquals("Young", user.getFirstName());
		assertEquals("seller", user.getRole().getName());
	}

}
