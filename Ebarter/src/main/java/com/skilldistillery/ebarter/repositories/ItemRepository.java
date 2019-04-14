package com.skilldistillery.ebarter.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.ebarter.entities.Item;
import com.skilldistillery.ebarter.entities.Offer;

public interface ItemRepository extends JpaRepository<Item, Integer> {


}
