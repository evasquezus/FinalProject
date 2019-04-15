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
import com.skilldistillery.ebarter.entities.Offer;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4200" })
public class OfferController {

	@Autowired
	OfferService service;

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

	@DeleteMapping(path = "offers/{id}")
	public void deleteOffer(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			service.deleteOffer(id);
			response.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@PutMapping(path = "offers/{id}")
	public Offer updateOffer(@PathVariable("id") int id, @RequestBody Offer offerToBeUpdated,
			HttpServletResponse response) {
		try {
			service.updateOffer(id, offerToBeUpdated);
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
