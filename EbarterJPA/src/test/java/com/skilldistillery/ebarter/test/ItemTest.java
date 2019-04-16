package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.Item;

public class ItemTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Item item;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		item = em.find(Item.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_item_get_data_from_item_table() {
		item = em.find(Item.class, 1);
		assertNotNull(item);
		assertEquals(1, item.getId());
		assertEquals("computer desk", item.getName());
	}

	@Test
	public void test_item_map_user_manytone_association() {
		assertNotNull(item);
		assertEquals(1, item.getUser().getId());
		assertEquals("cmoney", item.getUser().getUsername());
		assertEquals("young@ebarter.com", item.getUser().getEmail());
	}

	@Test
	public void test_item_map_category_manytone_association() {
		assertNotNull(item);
		assertEquals(1, item.getCategory().getId());
		assertEquals("furniture", item.getCategory().getName());
	}

//	@Test
//	public void test_item_map_offer_onetomany_association() {
//		assertNotNull(item);
//		assertEquals("furniture", item.getOffer().get(1));
//	}
}
