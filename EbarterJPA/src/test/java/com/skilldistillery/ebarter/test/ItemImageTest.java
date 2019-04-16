package com.skilldistillery.ebarter.test;

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
//import com.skilldistillery.ebarter.entities.Item;
//import com.skilldistillery.ebarter.entities.Item_Image;
//
//public class ItemImageTest {
//
//	private EntityManagerFactory emf;
//	private EntityManager em;
//	Item_Image itemImg;
//	Item item;
//
//	@BeforeEach
//	public void setUp() throws Exception {
//		emf = Persistence.createEntityManagerFactory("Ebarter");
//		em = emf.createEntityManager();
//		itemImg = em.find(Item_Image.class, 1);
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
//		assertNotNull(itemImg);
//		assertEquals(1, itemImg.getId());
//		assertEquals("itemimage.com", itemImg.getItemImageUrl());
//	}
//	
//}
