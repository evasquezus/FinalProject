package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ebarter.entities.Offer;

public class OfferTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Offer offer;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		offer = em.find(Offer.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_offer_get_data_from_offer_table() {
		offer = em.find(Offer.class, 1);
		assertNotNull(offer);
		assertEquals(1, offer.getId());
		assertEquals("I will offer you a chair", offer.getDescription());
	}
	
	@Test
	public void test_offer_get_data_from_items_table() {
		offer = em.find(Offer.class, 1);
		assertNotNull(offer);
		assertEquals(1, offer.getId());
		assertEquals("computer desk", offer.getItem().getName());
		assertEquals(1, offer.getItem().getId());
	}
}
