package com.skilldistillery.ebarter.data;

import java.util.List;

import com.skilldistillery.ebarter.entities.Item;

public interface ItemService {

	List<Item> getAllItems();

	Item getItemById(int id);

	Item createItem(Item item);

	Item updateItem(int id, Item item);

	boolean deleteItem(Item item, int id);

}
