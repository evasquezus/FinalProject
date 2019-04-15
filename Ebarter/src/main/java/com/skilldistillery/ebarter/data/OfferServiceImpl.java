package com.skilldistillery.ebarter.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Offer;
import com.skilldistillery.ebarter.repositories.OfferRepository;

@Service
public class OfferServiceImpl implements OfferService {

	@Autowired
	OfferRepository repo;

	@Override
	public List<Offer> getAllOffers() {
		List<Offer> allOffers = repo.findAll();
		return allOffers;
	}

	@Override
	public Offer getOfferById(int id) {
		Optional<Offer> offerFound = repo.findById(id);
		if (!offerFound.isPresent()) {
			return null;
		}
		Offer offer = offerFound.get();
		return offer;
	}

	@Override
	public Offer createOffer(Offer offer) {
		if (offer.getDescription() != null) {
			offer.setDescription(offer.getDescription());
			repo.saveAndFlush(offer);
			return offer;
		}
		return null;
	}

	@Override
	public Offer updateOffer(int id, Offer offer) {
		Optional<Offer> opt = repo.findById(id);
		if (opt.isPresent()) {
			Offer managed = opt.get();
			managed.setDescription(offer.getDescription());
			repo.saveAndFlush(offer);
		}
		return null;
	}

	@Override
	public boolean deleteOffer(int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}
	


}
