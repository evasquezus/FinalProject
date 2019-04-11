package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.Category;

public class CategoryTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Category category;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		category = em.find(Category.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_category_get_data_from_category_table() {
		category = em.find(Category.class, 1);
		assertNotNull(category);
		assertEquals(1, category.getId());
		assertEquals("furniture", category.getName());
	}
}
