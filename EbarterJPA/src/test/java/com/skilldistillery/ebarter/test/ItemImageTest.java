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
//import com.skilldistillery.ebarter.entities.ItemImage;
//
//public class ItemImageTest {
//
//	private EntityManagerFactory emf;
//	private EntityManager em;
//	ItemImage itemImg;
//
//	@BeforeEach
//	public void setUp() throws Exception {
//		emf = Persistence.createEntityManagerFactory("Ebarter");
//		em = emf.createEntityManager();
//		itemImg = em.find(ItemImage.class, 1);
//	}
//
//	@AfterEach
//	public void tearDown() throws Exception {
//		em.close();
//		emf.close();
//	}
//
//	@Test
//	public void test_itemimage_get_data_from_itemimage_table() {
//		itemImg = em.find(ItemImage.class, 1);
//		assertNotNull(itemImg);
//		assertEquals(1, itemImg.getId());
////		assertEquals("test", itemImg.getItemImageUrl());
//	}
//}
