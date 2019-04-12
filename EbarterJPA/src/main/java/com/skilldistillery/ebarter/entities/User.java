package com.skilldistillery.ebarter.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "user_name")
	private String username;

	@Column(name = "password")
	private String password;

	@Column(name = "enabled")
	private boolean active;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;

	@CreationTimestamp
	@Column(name = "register_date")
	private Date registerDate;

	@Column(name = "authenticated")
	private Boolean authenticated;

	@ManyToOne
	@JoinColumn(name = "role_id")
	@JsonIgnore
	private Role role;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "address_id")
	private Address address;
	
	@OneToMany(mappedBy = "user")
	private List<Item> item;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public Boolean getAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(Boolean authenticated) {
		this.authenticated = authenticated;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", active=" + active
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", registerDate="
				+ registerDate + ", authenticated=" + authenticated + ", role=" + role + ", address=" + address + "]";
	}

	public User(int id, String username, String password, boolean active, String firstName, String lastName,
			String email, Date registerDate, Boolean authenticated, Role role, Address address) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.active = active;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.registerDate = registerDate;
		this.authenticated = authenticated;
		this.role = role;
		this.address = address;
	}

	public User() {
		super();
	}

}


