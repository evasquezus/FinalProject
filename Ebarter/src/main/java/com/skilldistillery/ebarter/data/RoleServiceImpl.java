package com.skilldistillery.ebarter.data;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Role;
import com.skilldistillery.ebarter.repositories.RoleRepository;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository repo;

	public Role getRoleById(int id) {
		Optional<Role> role = repo.findById(id);
		return role.get();
	}
}
