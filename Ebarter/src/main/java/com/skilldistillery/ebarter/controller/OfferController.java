package com.skilldistillery.ebarter.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ebarter.data.OfferService;
<<<<<<< HEAD
import com.skilldistillery.ebarter.entities.Category;
import com.skilldistillery.ebarter.entities.Item;
=======
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route
import com.skilldistillery.ebarter.entities.Offer;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4200" })
public class OfferController {

	@Autowired
	OfferService service;
<<<<<<< HEAD

	@Autowired
	ItemService itemService;
=======
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route

	@GetMapping(path = "offers")
	public List<Offer> index() {
		List<Offer> allOffers = service.getAllOffers();
		return allOffers;
	}

	@GetMapping(path = "offers/{id}")
	public Offer getIndividualOffer(@PathVariable("id") int id, HttpServletResponse response) {
		Offer offerRetrived = service.getOfferById(id);
		response.setStatus(200);
		return offerRetrived;
	}
<<<<<<< HEAD

	@GetMapping(path = "items/{id}/offers")
	public List<Offer> getOffersForItem(@PathVariable("id") int id, HttpServletResponse response) {
		Item itemRetrived = itemService.getItemById(id);
		List<Offer> offersForItem = service.getAllOffersForSpecificItem(itemRetrived);
		response.setStatus(200);
		return offersForItem;
	}
=======
>>>>>>> parent of 4bbbe98... Layed out changes for back-end added new route

	@DeleteMapping(path = "offers/{id}")
	public void deleteOffer(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			service.deleteOffer(id);
			response.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
//	@PutMapping(path = "items/{id}/offers/{offerid}")
//	public Offer updateOfferForItem(@PathVariable("id") int id,@PathVariable("offerid") int offerid, @RequestBody Offer offerToBeUpdated,
//			HttpServletResponse response) {
//		Item itemRetrived = itemService.getItemById(id);
//		itemRetrived.setId(itemRetrived.getId());
//		offerToBeUpdated.setOfferStatus(2);
//		try {
//
//			offerToBeUpdated = service.updateOfferStatus(offerid, offerToBeUpdated);
//			response.setStatus(200);
//			return offerToBeUpdated;
//		} catch (Exception e) {
//			e.printStackTrace();
//			response.setStatus(400);
//		}
//		return null;
//
//	}
	
//	@GetMapping(path = "items/{id}/offers/{offerid}")
//	public Offer getOfferForItem(@PathVariable("id") int id,@PathVariable("offerid") int offerid, @RequestBody Offer offerToBeUpdated,
//			HttpServletResponse response) {
//		Item itemRetrived = itemService.getItemById(id);
//		offerToBeUpdated = service.getOfferById(id);
//		offerToBeUpdated.setOfferStatus(2);
//		try {
//
//			offerToBeUpdated = service.updateOfferStatus(id, offerToBeUpdated);
//			response.setStatus(200);
//			return offerToBeUpdated;
//		} catch (Exception e) {
//			e.printStackTrace();
//			response.setStatus(400);
//		}
//		return offerToBeUpdated;
//
//	}

	@PutMapping(path = "offers/{id}")
	public Offer updateOffer(@PathVariable("id") int id, @RequestBody Offer offerToBeUpdated,
			HttpServletResponse response) {
		offerToBeUpdated.setOfferStatus(2);
//		Item item = offerToBeUpdated.getItem();
//		System.out.println(item.getDescription());
		System.out.println("*************************************************");
//		item.setId(item.getId());
		try {

			offerToBeUpdated = service.updateOfferStatus(id, offerToBeUpdated);
			response.setStatus(200);
			return offerToBeUpdated;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
		return null;

	}

	@PostMapping(path = "offers")
	public Offer addOffer(@RequestBody Offer offerToBeAdded, HttpServletResponse response) {
		Offer offer = service.createOffer(offerToBeAdded);
		response.setStatus(201);
		return offer;
	}

}
