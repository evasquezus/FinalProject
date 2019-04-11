package com.skilldistillery.ebarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.ebarter.entities.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
