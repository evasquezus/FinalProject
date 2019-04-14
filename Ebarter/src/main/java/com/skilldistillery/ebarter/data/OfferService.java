package com.skilldistillery.ebarter.data;

import java.util.List;

import com.skilldistillery.ebarter.entities.Offer;

public interface OfferService {

	List<Offer> getAllOffers();

	Offer getOfferById(int id);

	Offer createOffer(Offer offer);

	Offer updateOffer(int id, Offer offer);

	boolean deleteOffer(int id);
	
}
