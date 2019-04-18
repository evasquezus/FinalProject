package com.skilldistillery.ebarter.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Category;
import com.skilldistillery.ebarter.entities.Item;
import com.skilldistillery.ebarter.repositories.ItemRepository;
import com.skilldistillery.ebarter.repositories.UserRepository;

@Service
public class ItemServiceImpl implements ItemService {

	@Autowired
	ItemRepository repo;

	@Autowired
	UserRepository userRepo;
	
//	@Autowired
//	CategoryService catService;
	
	@Override
	public List<Item> getAllItems() {
		List<Item> allItems = repo.findAll();
		return allItems;
	}

	@Override
	public Item getItemById(int id) {
		Optional<Item> itemFound = repo.findById(id);
		if (!itemFound.isPresent()) {
			return null;
		}
		Item item = itemFound.get();
		return item;
	}

	@Override
	public Item createItem(Item item) {
		if (item.getName() != null && item.getDescription() != null) {

			repo.saveAndFlush(item);
			return item;
		}
		return null;
	}

	@Override
	public Item updateItem(int id, Item item) {
		Optional<Item> opt = repo.findById(id);
		if (opt.isPresent()) {
			Item managed = opt.get();
			managed.setItemStatus(item.getItemStatus());
			managed.setDescription(item.getDescription());
			managed.setName(item.getName());
//			managed.setEndDate(item.getEndDate());
			System.out.println("*****************************************************");
			System.out.println("item: " + item);
			System.out.println("*****************************************************");
//			managed.setEndDate(item.getEndDate());
			repo.saveAndFlush(item);
		}
		return null;
	}

	@Override
	public boolean deleteItem(Item item, int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			item.setItemStatus(3);
			repo.flush();
			deleted = true;
		}
		return deleted;
	}

//	@Override
//	public boolean deleteItemTest(int id) {
//		Optional<Item> selectedItem = repo.findById(id);
//		if (selectedItem == null) {
//			return false;
//		} else {
//			repo.deleteById(id);
//			return true;
//
//		}
//	}
}
