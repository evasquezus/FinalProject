package com.skilldistillery.ebarter.data;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ebarter.entities.Address;
import com.skilldistillery.ebarter.entities.User;
import com.skilldistillery.ebarter.repositories.AddressRepository;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	AddressRepository repo;
			
	public Address updateAddress(Address address) {
		int id = address.getId();
		Optional<Address> opt = repo.findById(id);
		if (opt.isPresent()) {
			Address managed = opt.get();
			managed.setStreet(address.getStreet());
			managed.setStreet2(address.getStreet2());
			managed.setCity(address.getCity());
			managed.setState(address.getState());
			managed.setZipCode(address.getZipCode());
			managed.setPhone(address.getPhone());
			repo.saveAndFlush(managed);
			return managed;
		}
		return null;
	}

}
