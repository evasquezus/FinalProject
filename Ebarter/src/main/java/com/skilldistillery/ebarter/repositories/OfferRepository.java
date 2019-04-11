package com.skilldistillery.ebarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.ebarter.entities.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer>{

}
