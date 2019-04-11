package com.skilldistillery.ebarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.ebarter.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
