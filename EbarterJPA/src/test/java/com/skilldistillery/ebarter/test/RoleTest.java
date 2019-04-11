package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.Role;

public class RoleTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Role role;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		role = em.find(Role.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	

	@Test
	public void test_role_get_data_from_role_table() {
		role = em.find(Role.class, 1);
		assertNotNull(role);
		assertEquals(1, role.getId());
		assertEquals("seller", role.getName());
	}
}
