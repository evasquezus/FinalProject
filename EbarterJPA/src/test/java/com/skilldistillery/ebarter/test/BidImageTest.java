//package com.skilldistillery.ebarter.test;
//
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.persistence.Persistence;
//
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//
//import com.skilldistillery.ebarter.entities.BidImage;
//
//public class BidImageTest {
//
//	private EntityManagerFactory emf;
//	private EntityManager em;
//	BidImage bidImage;
//
//	@BeforeEach
//	public void setUp() throws Exception {
//		emf = Persistence.createEntityManagerFactory("FinalProject");
//		em = emf.createEntityManager();
//		bidImage = em.find(BidImage.class, 1);
//	}
//
//	@AfterEach
//	public void tearDown() throws Exception {
//		em.close();
//		emf.close();
//	}
//}
