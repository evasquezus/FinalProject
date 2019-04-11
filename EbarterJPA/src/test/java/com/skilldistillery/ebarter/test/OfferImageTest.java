package com.skilldistillery.ebarter.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

import com.skilldistillery.ebarter.entities.Offer_Image;

public class OfferImageTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Offer_Image offerImage;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Ebarter");
		em = emf.createEntityManager();
		offerImage = em.find(Offer_Image.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	public void test_Offer_Image_mapping_to_table() {
		assertNotNull(offerImage);
		assertEquals(1, offerImage.getId());
		assertEquals("image.com", offerImage.getOfferImgUrl());
//		this is comment
	}
}
