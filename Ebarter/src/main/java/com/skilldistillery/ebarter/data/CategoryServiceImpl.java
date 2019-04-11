package com.skilldistillery.ebarter.data;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Category;
import com.skilldistillery.ebarter.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository repo;

	@Override
	public Category getCategoryById(int id) {
		Optional<Category> category = repo.findById(id);
		return category.get();
	}

}
