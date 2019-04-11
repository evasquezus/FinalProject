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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "description")
	private String description;

	@Column(name = "name")
	private String name;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "is_active")
	private boolean active;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

//	@ManyToOne(cascade = { CascadeType.ALL })
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany
	@JoinColumn(name = "item")
	@JsonIgnore
	private List<Offer> offer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Offer> getOffer() {
		return offer;
	}

	public void setOffer(List<Offer> offer) {
		this.offer = offer;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + ", name=" + name + ", endDate=" + endDate
				+ ", active=" + active + ", category=" + category + ", user=" + user + ", offer=" + offer + "]";
	}

	public Item(int id, String description, String name, Date endDate, boolean active, Category category, User user,
			List<Offer> offer) {
		super();
		this.id = id;
		this.description = description;
		this.name = name;
		this.endDate = endDate;
		this.active = active;
		this.category = category;
		this.user = user;
		this.offer = offer;
	}

	public Item() {
		super();
	}

}
