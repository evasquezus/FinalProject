package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.Address;
import com.skilldistillery.ebarter.entities.User;

public class AddressTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Address address;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		address = em.find(Address.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_user_get_data_from_user_table() {
		address = em.find(Address.class, 1);
		assertNotNull(address);
		assertEquals(1, address.getId());
		assertEquals("Co", address.getState());
	}
}
