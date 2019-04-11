//package com.skilldistillery.ebarter.test;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertNotNull;
//
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.persistence.Persistence;
//
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import com.skilldistillery.ebarter.entities.Offer_Status;
//
//public class OfferStatusTest {
//
//	private EntityManagerFactory emf;
//	private EntityManager em;
//	Offer_Status offerStatus;
//
//	@BeforeEach
//	public void setUp() throws Exception {
//		emf = Persistence.createEntityManagerFactory("Ebarter");
//		em = emf.createEntityManager();
//		offerStatus = em.find(Offer_Status.class, 1);
//	}
//
//	@AfterEach
//	public void tearDown() throws Exception {
//		em.close();
//		emf.close();
//	}
//
//	@Test
//	public void test_offerstatus_get_data_from_offerstatus_table() {
//		offerStatus = em.find(Offer_Status.class, 1);
//		assertNotNull(offerStatus);
//		assertEquals(1, offerStatus.getId());
//		assertEquals("true", offerStatus.getStatusName());
//	}
//}
